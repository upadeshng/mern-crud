import history from '../src/history'

export function isLoggedIn() {
      if(localStorage.getItem('jwt')) {
        return true;
      }
  }
  
  export function loggedInUser() {
    var current_user = localStorage.getItem('currentUser');


      if(current_user) {
        return JSON.parse(localStorage.getItem('currentUser'));
      }
  }
  
  export function loggedInUserId() {
    var current_user = localStorage.getItem('currentUser');


      if(current_user) {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        return user.id;
      }
  }

  export function setSessionPharmacy(pharmacy){

    localStorage.setItem('pharmacy', JSON.stringify(pharmacy));

  }

  export function getSessionPharmacyId() {
  
    var pharmacy = localStorage.getItem('pharmacy');

    if(pharmacy) {
        var pharmacy = JSON.parse(localStorage.getItem('pharmacy'));

        return pharmacy.id;
    }
  }

  export function getSessionPharmacy() {
  
    var pharmacy = localStorage.getItem('pharmacy');

    if(pharmacy) {
        var pharmacy = JSON.parse(localStorage.getItem('pharmacy'));

        return pharmacy;
    }
  }

  export function checkPharmacyAccess(){

    /* check loggedIn access */
    checkAuthAccess();


    var pharmacyId =  getSessionPharmacyId();
    if(!pharmacyId){
        console.log('Redirecting profile. Please select pharmacy!')
        //history.push(`/profile`)
    }

  }

  export function checkAuthAccess(){

    if(!isLoggedIn()){
        console.log('Redirecting to login!')
        // history.push(`/login`)
        return;
    }

  }


  export function handleLogout(){
    localStorage.removeItem('currentUser', null);
    localStorage.removeItem('jwt', null);
    localStorage.removeItem('pharmacy', null);
  }


  
  