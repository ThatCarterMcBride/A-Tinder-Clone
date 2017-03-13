(function () {
  const items = [
    {
      id: 0,
      name: 'Carter McBride',
      age: 21,
      job: 'Web Developer at BYU Center for Teaching & Learning',
      images: ['images/me1.jpg', 'images/me2.jpg'],
      distance: 0,
      description: 'Superhero fan and Spider-Man expert. I love games of any kind and I make a mean stir-fry and Brazilian cheese bread. I\' m avaliable to adore Whitley with alliterative ability and my worst pun-ishment would be a world without bad jokes.'
    },
    {
      id: 1,
      name: 'Whitley Hicken',
      age: 19,
      job: 'Manager at entrata',
      images: ['images/whitley1.jpg', 'images/whitley2.jpg'],
      distance: 1,
      description: 'Absolutely the best girlfriend ever. She is kind and smart and determined. She is honest and pure and lovely.'
    },
    {
      id: 2,
      name: 'Once upon a time...',
      age: 2,
      job: 'Storyteller',
      images: ['images/tag1.jpg'],
      distance: 2,
      description: '(Keep swiping right!)'
    },
    {
      id: 3,
      name: 'A boy met a girl on Tinder',
      age: 3,
      job: 'Motivational Speaker',
      images: ['images/tag2.jpg'],
      distance: 3,
      description: '(Keep going! It gets better!)📸'
    },
	{
      id: 4,
      name: 'It\'s a match!',
      age: 4,
      job: 'It went well.',
      images: ['images/tag3.png'],
      distance: 4,
      description: '(Continue!)📸'
    },
	{
      id: 5,
      name: 'Our first hello',
      age: 5,
      job: 'Jedi Master',
      images: ['images/firstHello.gif'],
      distance: 5,
      description: 'I start people off on really great relationships. It works out really really well usually.'
    },
	{
      id: 6,
      name: 'Our first date',
      age: 6,
      job: 'Mekong Cafe 2',
      images: ['images/firstDate1.png', 'images/firstDate2.png'],
      distance: 6,
      description: 'She arrived before I did. I didn\'t recognize her, so I gave her a call when I was sitting behind her the whole time!'
    },
	{
	  id: 7,
      name: 'Where we made it official',
      age: 7,
      job: 'Discovery (Manila) Park',
      images: ['images/Official1.png', 'images/Official2.png'],
      distance: 7,
      description: 'It was July 4th, 2016. We were watching the fireworks. He said "Well, we\'ve been on a few dates." - "Seven dates." - "Seven? Seven dates now. I think we should make it official."'	
	},
	{
	  id: 8,
      name: 'Where we shared our first kiss',
      age: 8,
      job: 'My front doorstep',
      images: ['images/firstKiss1.jpg'],
      distance: 8,
      description: 'We had just finished up a date at the library. We then sat by the duck pond for a while and had a positive DTR. When we were at my doorstep, I played with my keys and went 60%. She didn\'t get it, so I said I was pulling a Hitch move and going 60%.'	
	},
	{
	  id: 9,
      name: 'Thus followed many dates.',
      age: 9,
      job: 'Everywhere',
      images: ['images/misc1.jpg', 'images/me3.jpg'],
      distance: 9,
      description: 'We went to a plate painting place and hers was awesome!'
	},
	{
	  id: 10,
      name: 'And our love grew...',
      age: 10,
      job: 'Pizza making',
      images: ['images/us1.jpg', 'images/us2.jpg'],
      distance: 9,
      description: 'This is when we made pizzas together and played games.'
	},
	{
	  id: 11,
      name: 'and grew...',
      age: 11,
      job: 'Mustache growing',
      images: ['images/us5.jpg'],
      distance: 11,
      description: 'After a successful attack on the nickle arcade, we walk away with our pride and considerably more facial hair.'
	},
	{
	  id: 12,
      name: 'and grew.',
      age: 12,
      job: 'Slurpee consumer',
      images: ['images/us8.jpg'],
      distance: 12,
      description: 'This is where we made pizzas together and played games.'
	},
	{
		id: 13,
		name: 'She\'s an example',
		age: 13,
		job: '(Read the profile)',
		images: ['images/us6.jpg', 'images/us6.2.jpg'],
		distance: 13,
		description: 'Whitley is a fantastic example to me. First of all, she is a devoted daughter of God. She strives to make her Heavenly Father and her earthly parents proud of her every action. She shows dilligence and care in all that she does, big or small. She is devoted to being the best person she can be and always striving to be more Christlike.'
	},
	{
		id: 14,
		name: 'She makes me better',
		age: 14,
		job: 'I want to be the very best.',
		images: ['images/me5.jpg', 'images/me6.jpg', 'images/us9.jpg'],
		distance: 14,
		description: 'Because she is so great, she makes me want to be my very best. She deserves the absolute most wonderful and loving guy in the world, and I want to be that man for her.'
	},
	{
		id: 15,
		name: 'Our goal',
		age: 15,
		job: 'Temple',
		images: ['images/us3.jpg', 'images/us4.jpg'],
		distance: 15,
		description: 'But there is one last step...'
	},
	{
		id: 16,
		name: 'But there is one last step...',
		age: 16,
		job: 'Nearby',
		images: ['images/tag4.jpg'],
		distance: 0,
		description: 'But there is one last step...'
	},
	{
		id: 17,
		name: 'Please open the door',
		age: 17,
		job: 'That one that I always come in through',
		images: ['images/open1.jpg'],
		distance: 15,
		description: 'What are you waiting for?'
	},
	{
		id: 18,
		name: 'At the doorstep',
		age: 18,
		job: 'Professional Flower Holder',
		images: ['images/Engage1.JPG'],
		distance: 0,
		description: 'I sent the message and then waited on the doorstep for about 10 minutes. She kept reloading the site to show her family halfway through.'
	},
	{
		id: 19,
		name: 'Reaction',
		age: 19,
		job: 'A Great Hugger',
		images: ['images/Engage2.JPG'],
		distance: 0,
		description: 'She opened the door crying. Honestly, she was so emotional that she forgot to say yes "officially" until some minutes later when her dad asked her. She said: "Oh I guess I didn\'t say anything yet. *looks at me* Yes!'
	},
	{
		id: 19,
		name: 'She said yes!',
		age: 18,
		job: 'Officially Engaged Man',
		images: ['images/Engage3.jpg'],
		distance: 0,
		description: 'This was later that day when we had time to prepare ourselves.'
	}
  ];

  const dataProvider = (function* () {
    while (true) {
      yield *items;
    }
  })();

  function adjustSwipeItems() {
    const top = document.querySelector('.item--top');
    const next = document.querySelector('.item--next');
    next.classList.add('hidden');
    top.style.cssText = '';
    top.style.position = 'relative';
    const topR = top.getBoundingClientRect();
    top.style.position = '';
    next.classList.remove('hidden');
    top.style.top = next.style.top = `${topR.top}px`;
    top.style.width = next.style.width = `${topR.width}px`;
    top.style.height = next.style.height = `${topR.height}px`;
    top.onResize();
    next.onResize();
  }

  function updateCards(event) {
    const top = document.querySelector('.item--top');
    window.ga && ga('send', 'event', `item-${top.data.id}`, event.detail);
    const next = document.querySelector('.item--next');
    const details = document.querySelector('tinderforbananas-details');
    top.style.transform = '';
    top.selected = 0;
    top.data = next.data;
    next.data = dataProvider.next().value;
  }

  function hookupButtons() {
    const details = document.querySelector('.view--details');
    document.querySelectorAll('.control--like').forEach(btn => 
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').like());
      })
    );
    document.querySelectorAll('.control--nope').forEach(btn =>
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').nope());
      })
    );
    document.querySelectorAll('.control--superlike').forEach(btn => 
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').superlike());
      })
    );
  }

  function showDetails(event) {
    const swipelist = document.querySelector('.view--swipelist');
    const data = swipelist.querySelector('.item--top').data;
    window.ga && ga('send', 'event', `item-${data.id}`, 'details');
    const details = document.querySelector('.view--details');
    const detailsText1 = details.querySelector('.item__details');
    const detailsText2 = details.querySelector('.description');
    const detailsNav = details.querySelector('nav');
    const carousel = document.querySelector('tinderforbananas-carousel');
    const image = document.querySelector('.view--swipelist .item--top picture');
    details.querySelector('tinderforbananas-details').data = data;

    // Let’s do FLIP!
    const start = image.getBoundingClientRect();
    
    swipelist.classList.add('overlaid');
    details.classList.remove('hidden');

    const target = carousel.getBoundingClientRect();
    carousel.style.transformOrigin = 'top left';
    carousel.style.transform = `scaleX(${start.width/target.width}) scaleY(${start.height/target.height}) translate(${start.left - target.left}px, ${start.top - target.top}px)`;   
    return requestAnimationFramePromise()
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        carousel.style.transition = 'transform 0.15s ease-in-out';
        carousel.style.transform = 'initial';
        detailsText1.style.transform = 'initial';
        detailsText2.style.transform = 'initial';
        detailsNav.style.transform = 'initial';
        return transitionEndPromise(carousel);
      })
      .then(_ => {
        carousel.style.transform = '';
        carousel.style.transition = '';
        carousel.style.transformOrigin = '';
      });

  }

  function hideDetails(event) {
    const swipelist = document.querySelector('.view--swipelist');
    const details = document.querySelector('.view--details');
    const detailsText1 = details.querySelector('.item__details');
    const detailsText2 = details.querySelector('.description');
    const detailsNav = details.querySelector('nav');
    const carousel = document.querySelector('tinderforbananas-carousel');
    const item = document.querySelector('.view--swipelist .item--top');
    const image = document.querySelector('.view--swipelist .item--top picture');

    item.selected = event && event.detail.selected || 0;

    const start = carousel.getBoundingClientRect();
    swipelist.classList.remove('overlaid');
    details.classList.add('hidden');
    const target = image.getBoundingClientRect();
    swipelist.classList.add('overlaid');
    details.classList.remove('hidden');

    item.style.overflow = 'visible';
    carousel.style.transformOrigin = 'top left';
    carousel.style.transition = 'transform 0.15s ease-in-out';
    return requestAnimationFramePromise()
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        carousel.style.transform = `scaleX(${target.width/start.width}) scaleY(${target.height/start.height}) translate(${target.left - start.left}px, ${target.top - start.top}px)`;   
        detailsText1.style.transform = '';
        detailsText2.style.transform = '';
        detailsNav.style.transform = '';
        return transitionEndPromise(carousel);
      })
      .then(_ => {
        carousel.style.transform = '';
        carousel.style.transition = '';
        carousel.style.transformOrigin = '';
        item.style.overflow = 'hidden';
        details.classList.add('hidden');
        swipelist.classList.remove('overlaid');
      });
  }

  function copyControls() {
    document.querySelectorAll('.view--details .control').forEach(btn => {
      const actionName = Array.from(btn.classList).find(name => /(like|nope)/.test(name));
      const svg = document.querySelector(`.view--swipelist .${actionName} svg`).cloneNode(true);
      btn.appendChild(svg);
    });
  }

  function installServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('sw.js');
  }

  function init() {
    const top = document.querySelector('.item--top');
    top.data = dataProvider.next().value;
    top.addEventListener('swipe', updateCards);
    top.addEventListener('details', showDetails);
    const next = document.querySelector('.item--next');
    next.data = dataProvider.next().value;
    const details = document.querySelector('tinderforbananas-details');
    details.addEventListener('dismiss', hideDetails);
    copyControls();
    adjustSwipeItems();
    window.addEventListener('resize', adjustSwipeItems);
    hookupButtons();
    installServiceWorker();
  }
  document.addEventListener('DOMContentLoaded', init);
})();
