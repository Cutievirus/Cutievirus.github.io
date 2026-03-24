declare const __DATA:string;
declare const __BASE_DIR:string;

declare namespace App {
    interface Locals {}
    interface PageData {}
    interface Platform {}
    
}


// svelte typings

declare namespace svelteHTML {
    interface SVGAttributes {
      'inline-src'?: import('@svelte-put/inline-svg/preprocess').Source;
    }
  }