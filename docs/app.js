(function(){function a(){const k=document.querySelector('.item--top'),l=document.querySelector('.item--next');l.classList.add('hidden'),k.style.cssText='',k.style.position='relative';const m=k.getBoundingClientRect();k.style.position='',l.classList.remove('hidden'),k.style.top=l.style.top=`${m.top}px`,k.style.width=l.style.width=`${m.width}px`,k.style.height=l.style.height=`${m.height}px`,k.onResize(),l.onResize()}function b(k){const l=document.querySelector('.item--top');window.ga&&ga('send','event',`item-${l.data.id}`,k.detail);const m=document.querySelector('.item--next'),n=document.querySelector('tinderforbananas-details');l.style.transform='',l.selected=0,l.data=m.data,m.data=j.next().value}function c(){const k=document.querySelector('.view--details');document.querySelectorAll('.control--like').forEach(l=>l.addEventListener('click',()=>{let n=Promise.resolve();k.classList.contains('hidden')||(n=e()),n.then(()=>document.querySelector('.item--top').like())})),document.querySelectorAll('.control--nope').forEach(l=>l.addEventListener('click',()=>{let n=Promise.resolve();k.classList.contains('hidden')||(n=e()),n.then(()=>document.querySelector('.item--top').nope())})),document.querySelectorAll('.control--superlike').forEach(l=>l.addEventListener('click',()=>{let n=Promise.resolve();k.classList.contains('hidden')||(n=e()),n.then(()=>document.querySelector('.item--top').superlike())}))}function d(){const l=document.querySelector('.view--swipelist'),m=l.querySelector('.item--top').data;window.ga&&ga('send','event',`item-${m.id}`,'details');const n=document.querySelector('.view--details'),o=n.querySelector('.item__details'),q=n.querySelector('.description'),r=n.querySelector('nav'),s=document.querySelector('tinderforbananas-carousel'),t=document.querySelector('.view--swipelist .item--top picture');n.querySelector('tinderforbananas-details').data=m;// Let’s do FLIP!
const u=t.getBoundingClientRect();l.classList.add('overlaid'),n.classList.remove('hidden');const v=s.getBoundingClientRect();return s.style.transformOrigin='top left',s.style.transform=`scaleX(${u.width/v.width}) scaleY(${u.height/v.height}) translate(${u.left-v.left}px, ${u.top-v.top}px)`,requestAnimationFramePromise().then(()=>requestAnimationFramePromise()).then(()=>{return s.style.transition='transform 0.15s ease-in-out',s.style.transform='initial',o.style.transform='initial',q.style.transform='initial',r.style.transform='initial',transitionEndPromise(s)}).then(()=>{s.style.transform='',s.style.transition='',s.style.transformOrigin=''})}function e(k){const l=document.querySelector('.view--swipelist'),m=document.querySelector('.view--details'),n=m.querySelector('.item__details'),o=m.querySelector('.description'),q=m.querySelector('nav'),r=document.querySelector('tinderforbananas-carousel'),s=document.querySelector('.view--swipelist .item--top'),t=document.querySelector('.view--swipelist .item--top picture');s.selected=k&&k.detail.selected||0;const u=r.getBoundingClientRect();l.classList.remove('overlaid'),m.classList.add('hidden');const v=t.getBoundingClientRect();return l.classList.add('overlaid'),m.classList.remove('hidden'),s.style.overflow='visible',r.style.transformOrigin='top left',r.style.transition='transform 0.15s ease-in-out',requestAnimationFramePromise().then(()=>requestAnimationFramePromise()).then(()=>{return r.style.transform=`scaleX(${v.width/u.width}) scaleY(${v.height/u.height}) translate(${v.left-u.left}px, ${v.top-u.top}px)`,n.style.transform='',o.style.transform='',q.style.transform='',transitionEndPromise(r)}).then(()=>{r.style.transform='',r.style.transition='',r.style.transformOrigin='',s.style.overflow='hidden',m.classList.add('hidden'),l.classList.remove('overlaid')})}function f(){document.querySelectorAll('.view--details .control').forEach(k=>{const l=Array.from(k.classList).find(n=>/(like|nope)/.test(n)),m=document.querySelector(`.view--swipelist .${l} svg`).cloneNode(!0);k.appendChild(m)})}function g(){'serviceWorker'in navigator&&navigator.serviceWorker.register('sw.js')}const i=[{id:0,name:'Carter McBride',age:21,job:'Web Developer at BYU Center for Teaching & Learning',images:['images/me1.jpg','images/me2.jpg'],distance:0,description:'Superhero fan and Spider-Man expert. I love games of any kind and I make a mean stir-fry and Brazilian cheese bread. I\' m avaliable to adore Whitley with alliterative ability and my worst pun-ishment would be a world without bad jokes.'},{id:1,name:'Whitley Hicken',age:19,job:'Manager at entrata',images:['images/whitley1.jpg','images/whitley2.jpg'],distance:1,description:'Absolutely the best girlfriend ever. She is kind and smart and determined. She is honest and pure and lovely.'},{id:2,name:'Once upon a time...',age:2,job:'Storyteller',images:['images/tag1.jpg'],distance:2,description:'(Keep swiping right!)'},{id:3,name:'A boy met a girl on Tinder',age:3,job:'Motivational Speaker',images:['images/tag2.jpg'],distance:3,description:'(Keep going! It gets better!)\uD83D\uDCF8'},{id:4,name:'It\'s a match!',age:4,job:'It went well.',images:['images/tag3.png'],distance:4,description:'(Continue!)\uD83D\uDCF8'},{id:5,name:'Our first hello',age:5,job:'Jedi Master',images:['images/firstHello.gif'],distance:5,description:'I start people off on really great relationships. It works out really really well usually.'},{id:6,name:'Our first date',age:6,job:'Mekong Cafe 2',images:['images/firstDate1.png','images/firstDate2.png'],distance:6,description:'She arrived before I did. I didn\'t recognize her, so I gave her a call when I was sitting behind her the whole time!'},{id:7,name:'Where we made it official',age:7,job:'Discovery (Manila) Park',images:['images/Official1.png','images/Official2.png'],distance:7,description:'It was July 4th, 2016. We were watching the fireworks. He said "Well, we\'ve been on a few dates." - "Seven dates." - "Seven? Seven dates now. I think we should make it official."'},{id:8,name:'Where we shared our first kiss',age:8,job:'My front doorstep',images:['images/firstKiss1.jpg','images/firstKiss2.png'],distance:8,description:'We had just finished up a date at the library. We then sat by the duck pond for a while and had a positive DTR. When we were at my doorstep, I played with my keys and went 60%. She didn\'t get it, so I said I was pulling a Hitch move and going 60%.'},{id:9,name:'Thus followed many dates.',age:9,job:'Everywhere',images:['images/misc1.jpg','images/me3.jpg'],distance:9,description:'We went to a plate painting place and hers was awesome!'},{id:10,name:'And our love grew...',age:10,job:'Pizza making',images:['images/us1.jpg','images/us2.jpg'],distance:9,description:'This is when we made pizzas together and played games.'},{id:11,name:'and grew...',age:11,job:'Mustache growing',images:['images/us5.jpg'],distance:11,description:'After a successful attack on the nickle arcade, we walk away with our pride and considerably more facial hair.'},{id:12,name:'and grew.',age:12,job:'Slurpee consumer',images:['images/us8.jpg'],distance:12,description:'This is where we made pizzas together and played games.'},{id:13,name:'She\'s an example',age:13,job:'(Read the profile)',images:['images/us6.jpg','images/us6.2.jpg'],distance:13,description:'Whitley is a fantastic example to me. First of all, she is a devoted daughter of God. She strives to make her Heavenly Father and her earthly parents proud of her every action. She shows dilligence and care in all that she does, big or small. She is devoted to being the best person she can be and always striving to be more Christlike.'},{id:14,name:'She makes me better',age:14,job:'I want to be the very best.',images:['images/me5.jpg','images/me6.jpg','images/us9.jpg'],distance:14,description:'Because she is so great, she makes me want to be my very best. She deserves the absolute most wonderful and loving guy in the world, and I want to be that man for her.'},{id:15,name:'Our goal',age:15,job:'Temple',images:['images/us3.jpg','images/us4.jpg'],distance:15,description:'But there is one last step...'},{id:16,name:'But there is one last step...',age:16,job:'Nearby',images:['images/tag4.jpg'],distance:0,description:'But there is one last step...'},{id:17,name:'Please open the door',age:17,job:'That one that I always come in through',images:['images/open1.jpg'],distance:15,description:'What are you waiting for?'},{id:18,name:'At the doorstep',age:18,job:'Professional Flower Holder',images:['images/Engage1.JPG'],distance:0,description:'I sent the message and then waited on the doorstep for about 10 minutes. She kept reloading the site to show her family halfway through.'},{id:19,name:'Reaction',age:19,job:'A Great Hugger',images:['images/Engage2.JPG'],distance:0,description:'She opened the door crying. Honestly, she was so emotional that she forgot to say yes "officially" until some minutes later when her dad asked her. She said: "Oh I guess I didn\'t say anything yet. *looks at me* Yes!'},{id:19,name:'She said yes!',age:18,job:'Officially Engaged Man',images:['images/Engage3.jpg'],distance:0,description:'This was later that day when we had time to prepare ourselves.'}],j=function*(){for(;;)yield*i}();document.addEventListener('DOMContentLoaded',function(){const k=document.querySelector('.item--top');k.data=j.next().value,k.addEventListener('swipe',b),k.addEventListener('details',d);const l=document.querySelector('.item--next');l.data=j.next().value;const m=document.querySelector('tinderforbananas-details');m.addEventListener('dismiss',e),f(),a(),window.addEventListener('resize',a),c(),g()})})();