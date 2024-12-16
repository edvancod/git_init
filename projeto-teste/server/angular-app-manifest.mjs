
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/contato"
  },
  {
    "renderMode": 2,
    "route": "/meeting"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "route": "/client"
  }
],
  assets: new Map([
['index.csr.html', {size: 19158, hash: '02afc9dd6ed093796a26779bd3d54bdd6e519fc94f8f6d248480b77d398fe051', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 8445, hash: '4900c06154bbb5b3c193e3b21b649080860c0b680c2831654aa9b85b30de0580', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 51816, hash: '43969e3740a0860f73e175c24b88c6fb2881eb4359c6f870e577cd43dc327e29', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 51816, hash: '43969e3740a0860f73e175c24b88c6fb2881eb4359c6f870e577cd43dc327e29', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['contato/index.html', {size: 33563, hash: 'fa26719649ed9d5e65f140a7f49a8a5a427dae7776633923c5fe381f716010b3', text: () => import('./assets-chunks/contato_index_html.mjs').then(m => m.default)}], 
['login/index.html', {size: 39334, hash: 'd73cecf4fea343f96a6f724a74d409f74c1b7edec5ca059a8626b6bf33bacd3e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}], 
['dashboard/index.html', {size: 37946, hash: 'caf6e4ff3b36341e2604c5df3421e37cf08ab1fd37cd35b1590726e6de19506d', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)}], 
['meeting/index.html', {size: 33563, hash: 'd23b461b288cff5f4eb287c81ac267803b5c1ee45acd79fc7518575bcb2c662a', text: () => import('./assets-chunks/meeting_index_html.mjs').then(m => m.default)}], 
['signup/index.html', {size: 33598, hash: '3c1b2a2a182ee8adae1757a2904c0a20e5ef3eeb7a49067ab096c1e18f5452cd', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)}], 
['client/index.html', {size: 33598, hash: '4b764cba01971656e3bc73f12ee10bf6ec1451fff420a0f4838d2905ec5e42a3', text: () => import('./assets-chunks/client_index_html.mjs').then(m => m.default)}], 
['styles-63PMUIWA.css', {size: 238590, hash: 'bWTlSPeaBYE', text: () => import('./assets-chunks/styles-63PMUIWA_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
