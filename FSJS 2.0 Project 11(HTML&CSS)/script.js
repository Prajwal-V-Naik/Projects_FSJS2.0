// Code for menu Icon

const menuIcon = document.querySelector('.material-symbols-outlined');
const dropdown = document.createElement('div');

dropdown.style.display = 'none';
dropdown.innerHTML = `
  <ul>
    <li><ion-icon name="compass-outline"></ion-icon></li>
    <li><ion-icon name="newspaper-outline"></ion-icon></li>
    <li><ion-icon name="git-network-outline"></ion-icon></li>
    <li><ion-icon name="call-outline"></ion-icon></li>
  </ul>
`;
document.body.appendChild(dropdown);

const dropdownList = dropdown.querySelector('ul');
dropdownList.classList.add('dropdownList');
// dropdownList.style.listStyle = 'none';
// dropdownList.style.display = "flex";
// dropdownList.style.flexDirection = "column";
// dropdownList.style.gap="10px";
// dropdownList.style.padding = 0;
// dropdownList.style.position = 'fixed';
// dropdownList.style.top = '42%';
// dropdownList.style.right = '5%';
// dropdownList.style.transform = 'scale(0)';
// dropdownList.style.transformOrigin = 'bottom right';
// dropdownList.style.transition = 'transform 0.3s ease-in-out';


const dropdownItems = dropdownList.querySelectorAll('li');

dropdownItems.forEach((item,index) => {
  item.style.backgroundColor = 'white';
  item.style.color = 'black';
  item.style.width = '2.5rem';
  item.style.height = '2.5rem';
  item.style.fontSize = '1.5rem';
  item.style.padding = '.5rem';
  item.style.borderRadius = '50%';
  item.style.textAlign = 'center';
  item.style.cursor = 'pointer';
  item.style.margin = '0 10px 10px 0';
  item.style.textDecoration = 'none';
  if (index === 0 || index === dropdownItems.length - 1) {
    item.style.marginRight = '-22px';
    item.style.marginLeft = '22px';
    item.style.backgroundColor = 'black';
    item.style.color = 'white';
  }
  if(index === 0){
    item.addEventListener('click', function() {
        window.location.assign('https://www.google.com');
      });
  }else if(index === 1){
    item.addEventListener('click', function() {
        window.location.assign('https://web.learncodeonline.in/');
      });
  }else if(index === 2){
    item.addEventListener('click', function() {
        window.location.assign('https://github.com');
      });
  }else{
    item.addEventListener('click', function() {
        window.location.assign('mailto:admin@example.com');
      });
  }
  item.addEventListener('click', function(){
    if(dropdown.style.display === 'block'){
        dropdown.style.display = 'none';
    }
  });
});

menuIcon.addEventListener('click', function() {
    if (dropdown.style.display === 'none') {
      dropdownList.style.transform = 'scale(1)';
      dropdown.style.display = 'block';
    } else {
        dropdownList.style.transform = 'scale(0)';
        dropdown.style.display = 'none';
    }
});
