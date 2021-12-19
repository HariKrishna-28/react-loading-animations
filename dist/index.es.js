import e from"react";function t(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===i&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}t(".circle>div{animation:lds-circle 2.4s cubic-bezier(0,.2,.8,1) infinite;border-radius:50%;display:inline-block;height:25px;margin:8px;width:25px}@keyframes lds-circle{0%,to{animation-timing-function:cubic-bezier(.5,0,1,.5)}0%{transform:rotateY(0deg)}50%{animation-timing-function:cubic-bezier(0,.5,.5,1);transform:rotateY(5turn)}to{transform:rotateY(10turn)}}");const i=({color:t="black"})=>e.createElement("div",{class:"circle"},e.createElement("div",{style:{backgroundColor:t}}));t(".lds-facebook{display:inline-block;height:80px;position:relative;width:80px}.lds-facebook div{animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;display:inline-block;left:8px;position:absolute;width:16px}.lds-facebook div:first-child{animation-delay:-.24s;left:8px}.lds-facebook div:nth-child(2){animation-delay:-.12s;left:32px}.lds-facebook div:nth-child(3){animation-delay:0;left:56px}@keyframes lds-facebook{0%{height:64px;top:8px}50%,to{height:32px;top:24px}}");const l=({color:t="black"})=>{const i={backgroundColor:`${t} `};return e.createElement("div",{class:"lds-facebook"},e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}))};t(".lds-ring{display:inline-block;height:80px;position:relative;width:80px}.lds-ring div{animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid #fff;border-radius:50%;box-sizing:border-box;display:block;height:64px;margin:8px;position:absolute;width:64px}.lds-ring div:first-child{animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}");const a=({color:t="black"})=>{const i={borderColor:`${t} transparent transparent transparent`};return e.createElement("div",{class:"lds-ring"},e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}))};t(".lds-ellipsis{display:inline-block;height:80px;position:relative;width:80px}.lds-ellipsis div{animation-timing-function:cubic-bezier(0,1,1,0);border-radius:50%;height:13px;position:absolute;top:33px;width:13px}.lds-ellipsis div:first-child{animation:lds-ellipsis1 .6s infinite;left:8px}.lds-ellipsis div:nth-child(2){animation:lds-ellipsis2 .6s infinite;left:8px}.lds-ellipsis div:nth-child(3){animation:lds-ellipsis2 .6s infinite;left:32px}.lds-ellipsis div:nth-child(4){animation:lds-ellipsis3 .6s infinite;left:56px}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}");const s=({color:t="black"})=>{const i={backgroundColor:t};return e.createElement("div",{class:"lds-ellipsis"},e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}))};t(".lds-ripple{display:inline-block;height:80px;position:relative;width:80px}.lds-ripple div{animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite;border:4px solid #cef;border-radius:50%;opacity:1;position:absolute}.lds-ripple div:nth-child(2){animation-delay:-.5s}@keyframes lds-ripple{0%{height:0;left:36px;opacity:1;top:36px;width:0}to{height:72px;left:0;opacity:0;top:0;width:72px}}");const n=({color:t="black"})=>{const i={border:`4px solid ${t} `};return e.createElement("div",{class:"lds-ripple"},e.createElement("div",{style:i}),e.createElement("div",{style:i}))};t(".lds-grid{display:inline-block;height:80px;position:relative;width:80px}.lds-grid div{animation:lds-grid 1.2s linear infinite;background:#cef;border-radius:50%;height:16px;position:absolute;width:16px}.lds-grid div:first-child{animation-delay:0s;left:8px;top:8px}.lds-grid div:nth-child(2){animation-delay:-.4s;left:32px;top:8px}.lds-grid div:nth-child(3){animation-delay:-.8s;left:56px;top:8px}.lds-grid div:nth-child(4){animation-delay:-.4s;left:8px;top:32px}.lds-grid div:nth-child(5){animation-delay:-.8s;left:32px;top:32px}.lds-grid div:nth-child(6){animation-delay:-1.2s;left:56px;top:32px}.lds-grid div:nth-child(7){animation-delay:-.8s;left:8px;top:56px}.lds-grid div:nth-child(8){animation-delay:-1.2s;left:32px;top:56px}.lds-grid div:nth-child(9){animation-delay:-1.6s;left:56px;top:56px}@keyframes lds-grid{0%,to{opacity:1}50%{opacity:.5}}");const d=({color:t="black"})=>{const i={backgroundColor:t};return e.createElement("div",{class:"lds-grid"},e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}))};t(".lds-default{display:inline-block;height:80px;position:relative;width:80px}.lds-default div{animation:lds-default 1.2s linear infinite;border-radius:50%;height:6px;position:absolute;width:6px}.lds-default div:first-child{animation-delay:0s;left:66px;top:37px}.lds-default div:nth-child(2){animation-delay:-.1s;left:62px;top:22px}.lds-default div:nth-child(3){animation-delay:-.2s;left:52px;top:11px}.lds-default div:nth-child(4){animation-delay:-.3s;left:37px;top:7px}.lds-default div:nth-child(5){animation-delay:-.4s;left:22px;top:11px}.lds-default div:nth-child(6){animation-delay:-.5s;left:11px;top:22px}.lds-default div:nth-child(7){animation-delay:-.6s;left:7px;top:37px}.lds-default div:nth-child(8){animation-delay:-.7s;left:11px;top:52px}.lds-default div:nth-child(9){animation-delay:-.8s;left:22px;top:62px}.lds-default div:nth-child(10){animation-delay:-.9s;left:37px;top:66px}.lds-default div:nth-child(11){animation-delay:-1s;left:52px;top:62px}.lds-default div:nth-child(12){animation-delay:-1.1s;left:62px;top:52px}@keyframes lds-default{0%,20%,80%,to{transform:scale(1)}50%{transform:scale(1.5)}}");const r=({color:t="black"})=>{const i={backgroundColor:t};return e.createElement("div",{class:"lds-default"},e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}),e.createElement("div",{style:i}))};t(".spinner{-webkit-animation:sk-rotateplane 1.2s ease-in-out infinite;animation:sk-rotateplane 1.2s ease-in-out infinite;height:40px;width:40px}@-webkit-keyframes sk-rotateplane{0%{-webkit-transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg)}to{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}@keyframes sk-rotateplane{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}");const o=({color:t="black"})=>e.createElement("div",{class:"spinner",style:{backgroundColor:t}});t(".spinner{font-size:10px;height:50px;width:50px}.spinner>div{-webkit-animation:sk-stretchdelay 1.2s ease-in-out infinite;animation:sk-stretchdelay 1.2s ease-in-out infinite;display:inline-block;height:100%;margin-left:1px;margin-right:1px;width:5px}.spinner .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.spinner .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-stretchdelay{0%,40%,to{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-stretchdelay{0%,40%,to{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}");const c=({color:t="black"})=>{const i={backgroundColor:`${t} `};return e.createElement("div",{class:"spinner"},e.createElement("div",{class:"rect1",style:i}),e.createElement("div",{class:"rect2",style:i}),e.createElement("div",{class:"rect3",style:i}),e.createElement("div",{class:"rect4",style:i}),e.createElement("div",{class:"rect5",style:i}))};export{o as BoxLoader,i as CircleLoader,s as EllipsisLoader,l as FaceBookLoader,d as GridLoader,a as RingLoader,n as RippleLoader,r as RotateLoader,c as ScaleLoader};