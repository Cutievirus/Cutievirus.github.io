<script>
    import Anchor from "$lib/components/Anchor.svelte";
    import Code from "$lib/components/Code.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import ParameterList from "../../m[vz=vz]3d/shared/ParameterList.svelte";

</script>

<PageTitle title="Vertex Offsets"/>

<p>
    Vertex offsets are a powerful feature that let you adjust the positions of the verteces of a tile. Each tile has a total of 8 corners which can be adjusted, allowing things such as hills, slopes, and even diagonal walls.
</p>

<p>The eight corners are as follows:</p>
<table>
    <tr>
        <td>corner 1:</td>
        <td>bottom northwest</td>
    </tr>
    <tr>
        <td>corner 2:</td>
        <td>bottom northeast</td>
    </tr>
    <tr>
        <td>corner 3:</td>
        <td>bottom southwest</td>
    </tr>
    <tr>
        <td>corner 4:</td>
        <td>bottom southeast</td>
    </tr>
    <tr>
        <td>corner 5:</td>
        <td>top northwest</td>
    </tr>
    <tr>
        <td>corner 6:</td>
        <td>top northeast</td>
    </tr>
    <tr>
        <td>corner 7:</td>
        <td>top southwest</td>
    </tr>
    <tr>
        <td>corner 8:</td>
        <td>top southeast</td>
    </tr>
</table>

<p>
    The vtx function takes parameters for each of these 8 corners, for each of the x, y, and z axes.
</p>
<ParameterList>x1,y1,z1|x2,y2,z2|x3,y3,z3|x4,y4,z4|x5,y5,z5|x6,y6,z6|x7,y7,z7|x8,y8,z8</ParameterList>

<Anchor h2 id="diagonal-walls">Diagonal Walls</Anchor>

<img src="/img/examples/vtx-diagonal-walls.png" alt="" />

<p>
    Diagonal walls are achieved by taking one of the corners of the tile and moving it to the center.
</p>
<p>Example:</p>
<Code>vtx(x4:-.5,-.5),side(+0,+1,connect:se),-1#top(A2,0,0)</Code>
<p>
    The vtx command takes corner 4 (the sourtheast corner) and moves it to the center of the tile. This creates the basic shape for the diagonal wall.
</p>
<p>
    In the side command, we're both choosing a new texture for the side (+0,+1 is one tile down on the tileset), but we're also setting the connection mode. <code>connect:se</code> means the southeast corner should have the texture be "connected", this prevents the autotile from using a corner texture here.
</p>
<p>
    <code>-1#</code> indicates a new Configuration Layer (a new feature in Rewrite). This creates a new layer that we can configure. -1 means it will be below the default layer. This layer will just be a basic floor texture with <code>top(A2,0,0)</code>. Otherwise, our vertex offset will leave a hole in the floor. Alternatively, if we have the floor on a different tile layer already then we don't need this part.
</p>

<Anchor h2 id="slopes">Slopes</Anchor>

<img src="/img/examples/vtx-slopes.png" alt="" />

<p>
    Internally, the Slope command uses vertex offsets. The two following configurations should have roughly the same result. Although, the slope command has some additional features for the direction of the slope.
</p>
<Code>slope(1)</Code>
<Code>vtx(z7:1|z8:1)</Code>
<p>
    <code>z7</code> and <code>z8</code> are the top southwest and top southeast corners, each of which we're moving up (z) by 1.
</p>