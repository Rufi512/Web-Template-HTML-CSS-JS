
function toogleMenu(){
	const nav = document.querySelector('nav')

	if(nav.classList == "" || nav.classList == 'menu-disable'){
		nav.classList.remove('menu-disable')
		nav.classList.add('menu-active')
	}else{
		nav.classList.remove('menu-active')
	nav.classList.add('menu-disable')
	setTimeout(()=>{nav.classList.remove('menu-disable')},500)
	}

	}
	
