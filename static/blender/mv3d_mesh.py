bl_info = {
    # required
    'name': 'MV3D Meshes',
    'blender': (2, 80, 0),
    'category': 'Object',
    # optional
    'version': (1, 0, 0),
    'author': 'Cutievirus',
    'description': 'Converts meshes into mv3d mesh strings for use with MV3D and MZ3D',
}

import bpy
import bmesh
import re

from bpy.types import (Panel, Operator, Scene, Object)
from bpy.props import (StringProperty, BoolProperty, IntProperty)

def num(n,places=3):
    s="{:.{}f}".format(n,places)
    neg = s[0]=='-'
    s=s.lstrip('-')
    s=s.strip('0')
    s=s.rstrip('.')
    if s == '':
        s='0'
    if neg and s!='0':
        s='-'+s
    return s

def parse_nested_parentheses(s,lp='{',rp='}'):
    nest = 0
    for i in range(len(s)):
        c = s[i]
        if c == lp:
            nest += 1
        elif c == rp:
            if nest>0:
                nest -= 1
            else:
                break;
    return s[:i]

def to_float(s):
    try:
        return float(s)
    except ValueError:
        return 0.0
    
def group_list_elements(l,n):
    return list(zip( *(iter(l),)*n ))

def importMeshFromData(context):
    
    meshString = getProperty(context.scene,'mv3d.input')
    
    r = re.compile("((p)[a-z]*){",re.IGNORECASE)
    
    match=r.search(meshString)
    while match is not None:
        meshString = meshString[match.end():]
        pointData = parse_nested_parentheses(meshString)
        meshString = meshString[len(pointData)+1:]
        match = r.search(meshString)
        
        points, indices, uvs, texture_string, *_ = pointData.split('|')+['']*3
        
        points = group_list_elements(map(to_float, points.split(',')),3)
        points = [(a[0],-a[1],a[2]) for a in points]
        indices = [[int(b) for b in a] for a in group_list_elements(map(to_float,indices.split(',')),3)]
        
        if len(points)<3 or len(indices)<1:
            continue;
        
        uvs = [to_float(a) for a in uvs.split(',')]
        if len(points)*2 > len(uvs):
            uv_pattern = [0,0,0,1,1,0,1,1]
            while len(points)*2 > len(uvs):
                uvs.append(uv_pattern[len(uvs)%len(uv_pattern)])
        uvs = group_list_elements(uvs,2)
        uvs = [(a[0],1-a[1]) for a in uvs]
        
        texture_string = texture_string.strip()
        if texture_string[:1] == '{':
            texture_string=parse_nested_parentheses(texture_string[1:])

        if 'MV3D Collection' not in bpy.data.collections:
            collection = bpy.data.collections.new('MV3D Collection')
            context.scene.collection.children.link(collection)
        else:
            collection = bpy.data.collections.get('MV3D Collection')
        
        mesh = bpy.data.meshes.new('MV3D Mesh')
        obj = bpy.data.objects.new('MV3D Mesh',mesh)
        collection.objects.link(obj)
        context.view_layer.objects.active=obj
        obj.select_set(True)
        
        mesh.from_pydata(points,[],indices)
        
        obj['mv3d.texture_string'] = texture_string
        
        uv_layer = mesh.uv_layers.new(name='MV3D UV')
        for loop in mesh.loops:
            uv_layer.data[loop.index].uv = uvs[loop.vertex_index]
    
    #mesh = context.object.data
    #bm = bmesh.new()

def generatePointData(context,object):
    scene = context.scene
    apply_transforms = getProperty(scene,'mv3d.apply_transforms')
    apply_modifiers = getProperty(scene,'mv3d.apply_modifiers') and object.mode != 'EDIT'
    texture_string = getProperty(object,'mv3d.texture_string')

    tris = bmesh.new()
    
    if apply_modifiers:
        dg = context.evaluated_depsgraph_get()
        tris.from_object(object,dg)
    else:
        mesh = object.data
        tris.from_mesh(mesh)
    
    if apply_transforms:
        bmesh.ops.transform(tris, matrix=object.matrix_world, verts=tris.verts)
    
    bmesh.ops.triangulate(tris, faces=tris.faces[:])

    uv_layer = tris.loops.layers.uv.active

    points = []
    indices = []
    uvs = []

    verts = {}

    tris.faces.ensure_lookup_table()

    for face in tris.faces:
        for loop in face.loops:
            uv = loop[uv_layer].uv.copy().freeze()
            point = loop.vert.co.copy().freeze()
            index = loop.vert.index
            key = (index,uv)
            if key not in verts:
                points.append(point)
                verts[key] = len(points) - 1
                uvs.append(uv)
            indices.append(verts[key])
            
            
    p = getProperty(scene,'mv3d.precision')
                
    pointData = "p{"
    pointData += ','.join(map(lambda v: num(v.x,p)+','+num(-v.y,p)+','+num(v.z,p),points))
    pointData += '|'
    pointData += ','.join(map(lambda v: num(v,p),indices))
    pointData += '|'
    pointData += ','.join(map(lambda v: num(v.x,p)+','+num(1-v.y,p),uvs))
    pointData += '|'
    pointData += '{'+texture_string+'}'
    pointData += '}'

    #tris.to_mesh(mesh)
    tris.free()
    
    return pointData

def get_selected_objects(context):
    #return list(filter(lambda o:o.type=='MESH',context.selected_objects))
    return [o for o in context.selected_objects if o.type == 'MESH']

def getProperty(object,key):
    value = object.get(key)
    if value is None:
        value = object.bl_rna.properties.get(key).default
    return value

class MV3D_OT_import_mesh(Operator):
    bl_idname='mv3d.import_mesh'
    bl_label='Import Mesh'
    bl_description='Generates a mesh based on the inputted MV3D mesh string'
    bl_space_type='VIEW_3D'
    bl_region_type = 'UI'
    bl_options = {'UNDO'}
    
    @classmethod
    def poll(cls,context):
        return len(getProperty(context.scene,'mv3d.input'))>0
    
    def execute(self,context):
        if context.mode != 'OBJECT':
            bpy.ops.object.mode_set(mode='OBJECT')
        bpy.ops.object.select_all(action='DESELECT')
        
        importMeshFromData(context)
        
        return {'FINISHED'}

class MV3D_OT_export_mesh(Operator):
    bl_idname='mv3d.export_mesh'
    bl_label='Export Mesh'
    bl_description='Converts selected object into MV3D mesh string'
    bl_space_type='VIEW_3D'
    bl_region_type = 'UI'
    bl_options = {'UNDO'}
    
    @classmethod
    def poll(cls,context):
        return len(get_selected_objects(context))>0
    
    def execute(self,context):
        objects = get_selected_objects(context)
        
        pointData=''
        
        for object in objects:
            pointData += generatePointData(context,object)
        
        context.scene['mv3d.output'] = pointData
        
        return {'FINISHED'}


class MV3D_PT_export_panel(Panel):
    #bl_idname = 'mv3d.export_panel'
    bl_label = 'Mesh Exporter'
    bl_category = 'MV3D'
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    
    def draw(self,context):
        layout = self.layout
        
        layout.prop(context.scene,'mv3d.apply_transforms')
        
        if context.active_object is None or context.active_object.mode!='EDIT':
            layout.prop(context.scene,'mv3d.apply_modifiers')
        else:
            layout.label(text='')
        
        layout.prop(context.scene,'mv3d.precision')
        
        box = layout.box()
        
        if context.active_object is not None and context.active_object.type=='MESH':
            box.prop(context.active_object,'mv3d.texture_string')
        else:
            box.label(text='')
        
        
        layout.operator('mv3d.export_mesh')
        
        layout.prop(context.scene,'mv3d.output')

class MV3D_PT_import_panel(Panel):
    #bl_idname = 'mv3d.import_panel'
    bl_label = 'Mesh Importer'
    bl_category = 'MV3D'
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    
    def draw(self,context):
        layout = self.layout
        layout.prop(context.scene,'mv3d.input')
        layout.operator('mv3d.import_mesh')
        

classes = [
    MV3D_OT_export_mesh,
    MV3D_OT_import_mesh,
    MV3D_PT_export_panel,
    MV3D_PT_import_panel,
]

scene_properties = {
    'mv3d.input': StringProperty(
        name='Input',
        description="MV3D mesh string to generate",
        default='',
    ),
    'mv3d.output': StringProperty(
        name='Output',
        description="Generated MV3D mesh string",
        default='',
    ),
    'mv3d.apply_transforms':BoolProperty(
        name='Apply Transforms',
        description="Applys object transforms to the generated meshes",
        default=True,
    ),
    'mv3d.apply_modifiers':BoolProperty(
        name='Apply Modifiers',
        description="Applys object modifiers to the generated meshes",
        default=True,
    ),
    'mv3d.precision':IntProperty(
        name='Precision',
        description="Max number of decimal places",
        default=3,
        min=0,
        max=16,
    ),
}
object_properties = {
    'mv3d.texture_string': bpy.props.StringProperty(
        name='Texture String',
        description="The texture string that will be used by the mesh",
        default='A1,0,0',
    ),
}

def register():
    for cls in classes:
        bpy.utils.register_class(cls)
        
    for key in scene_properties:
        setattr(Scene, key, scene_properties[key])
    for key in object_properties:
        setattr(Object, key, object_properties[key])
 
def unregister():
    for cls in classes:
        bpy.utils.unregister_class(cls)
        
    for key in scene_properties:
        delattr(Scene, key)
    for key in object_properties:
        delattr(Object, key)
 
if __name__ == "__main__":
    register()
