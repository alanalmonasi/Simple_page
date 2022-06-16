const homeState = function(){
   document.querySelector('#heading').textContent = null;
   document.querySelector('#content').innerHTML = `
      <div class="jumbotron">
         <h1 class="display-4">Hello, world!</h1>
         <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
         <hr class="my-4">
         <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
         <p class="lead">
         <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
         </p>
      </div>
   `;
};

const aboutState = function(){
   document.querySelector('#heading').textContent = 'About us';
   document.querySelector('#content').innerHTML = `
      <p>This is the about section</p>
   `;
};

const contactState = function(){
   document.querySelector('#heading').textContent = 'Contact us';
   document.querySelector('#content').innerHTML = `
      <form>
         <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" placeholder="Enter name">
         </div>
         <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Please enter your email">
         </div>
         <button type="submit" class="btn btn-primary" id="submit-form">Submit</button>
      </form>
   `;
};

//Init first state
homeState();

//UI variables
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

//Event listeners when clicking 
home.addEventListener('click', () => {
   homeState();   
});

about.addEventListener('click', () => {
   aboutState();
});

contact.addEventListener('click', (e) => {
   contactState();
   const subBtn = document.getElementById('submit-form');

   subBtn.onclick = () => {

      subBtn.innerText = `This button isn't ready yet :D`;
      if(subBtn.innerText === `This button isn't ready yet :D`){
         subBtn.disabled = true;
      }
   }
   e.preventDefault();
});



