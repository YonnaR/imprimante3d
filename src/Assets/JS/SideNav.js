/**
 * Side menu's mobilescript (hide show)
 */
document.querySelector('#burger').onclick = function(){
  console.log(document.querySelector('#side-bar'))
  if (document.querySelector('#side-bar').className === 'columns') {
      document.querySelector('#side-bar').className = 'column is-3 is-sidebar-menu is-hidden-mobile';
      document.querySelector('#main').className = 'column is-main-content';    
  } else {
      document.querySelector('#side-bar').className = 'columns';
      document.querySelector('#main').className = 'is-hidden-mobile';    
  }
}
/**
 * End
 */