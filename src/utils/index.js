export const contacts = [
    { id: 1, name: 'John Doe', phoneNumber: '+2347012345678', status: 'Online'},
    { id: 2, name: 'Jane Smith', phoneNumber: '+2347023456789', status: 'Offline' },
    { id: 3, name: 'Michael Johnson', phoneNumber: '+2347034567890', status: 'Online' },
    { id: 4, name: 'Mary Johnson', phoneNumber: '+2347045678901', status: 'Busy' },
    { id: 5, name: 'Chris Evans', phoneNumber: '+2347056789012', status: 'Offline' },
    { id: 6, name: 'Joe Nnamdi', phoneNumber: '+2347043952140', status: 'Offline' },
    { id: 7, name: 'Christian Elvis', phoneNumber: '+2347056789012', status: 'Offline' },
    { id: 8, name: 'Chris Chukwu', phoneNumber: '+2347054789012', status: 'Offline' },
    { id: 9, name: 'Chris Evans', phoneNumber: '+2347020789012', status: 'Offline' },
    { id: 10, name: 'Naruto Uzumaki', phoneNumber: '+2347056789112', status: 'Offline' },
    { id: 11, name: 'Uchiha Sasuke', phoneNumber: '+2347058789012', status: 'Offline' },
];
  

export const callHistory = [
    { id: 1, name: 'John Doe', type: 'Video', date: '2025-01-27', duration: '5:32', status: 'Missed', phoneNumber: '+2347012345678', },
    { id: 2, name: 'Jane Smith', type: 'Audio', date: '2025-01-19', duration: '2:11', status: 'Missed', phoneNumber: '+2347023456789' },
    { id: 3, name: 'Michael Johnson', type: 'Video', date: '2025-01-18', duration: '8:45', status: 'Completed', phoneNumber: '+2347034567890' },
    { id: 4, name: 'Mary Johnson', type: 'Audio', date: '2024-01-17', duration: '3:05', status: 'Declined', phoneNumber: '+2347045678901' },
    { id: 5, name: 'Chris Evans', type: 'Audio', date: '2025-01-15', duration: '0:45', status: 'Missed', phoneNumber: '+2347056789012' },
    { id: 6, name: 'Chris Evans', type: 'Audio', date: '2025-01-28', duration: '0:45', status: 'Missed', phoneNumber: '+2347043952140' },
  ];


  // export function returnUsers(no){
  //   let user = co
  // }

  export function formatDate(dates){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 
                    'May', 'Jun', 'Jul', 'Aug', 
                    'Sept', 'Oct', 'Nov', 'Dec'
                   ]
    let year = Number(dates.split('-')[0]);
    const month = Number(dates.split('-')[1]);
    const date = Number(dates.split('-')[2]);
    const cYear = new Date().getFullYear();
    const cMonth = new Date().getMonth() + 1;
    const cDate = new Date().getDate();

    if(cYear !== year){ 
      year = year.toString()
      return `${month}/${date}/${year.split('')[2]}${year.split('')[3]}`
     }

    if(cMonth === month){
        let yesterday = cDate - 1;
        if(date === yesterday || yesterday === 0 && date === 1){ return 'Yesterday' };
        if(date === cDate){ return 'Today' };
    }
    
    return `${months[month - 1]} ${date}`
}

  
export const userProfile = {
    id: 1,
    name: 'John Doe',
    phoneNumber: '+2347012345678',
    status: 'Online',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg', // URL to a random profile picture
    bio: 'Just a regular guy trying to connect with people.',
    lastActive: '2025-01-20 14:30',
};

export const incomingCall = {
    id: 1,
    name: 'Jane Smith',
    type: 'Video', // or 'Audio'
    status: 'Ringing', // Other possible status: 'Declined', 'Missed', 'Answered'
    callDuration: '0:00',
  };

  
export const settingsOptions = [
    { id: 1, name: 'Notifications', status: 'Enabled' },
    { id: 2, name: 'Privacy', status: 'Public' },
    { id: 3, name: 'Blocked Users', status: 'None' },
    { id: 4, name: 'Language', status: 'English' },
    { id: 5, name: 'Call Settings', status: 'Default' },
  ];

export const callFilters = ['All', 'Video', 'Audio', 'Missed', 'Completed'];

export const countryPhoneCodes = [
  { country: "Afghanistan", code: "+93", flag: "af.png" },
  { country: "Albania", code: "+355", flag: "al.png" },
  { country: "Algeria", code: "+213", flag: "dz.png" },
  { country: "Andorra", code: "+376", flag: "ad.png" },
  { country: "Angola", code: "+244", flag: "ao.png" },
  { country: "Antigua and Barbuda", code: "+1-268", flag: "ag.png" },
  { country: "Argentina", code: "+54", flag: "ar.png" },
  { country: "Armenia", code: "+374", flag: "am.png" },
  { country: "Australia", code: "+61", flag: "au.png" },
  { country: "Austria", code: "+43", flag: "at.png" },
  { country: "Azerbaijan", code: "+994", flag: "az.png" },
  { country: "Bahamas", code: "+1-242", flag: "bs.png" },
  { country: "Bahrain", code: "+973", flag: "bh.png" },
  { country: "Bangladesh", code: "+880", flag: "bd.png" },
  { country: "Barbados", code: "+1-246", flag: "bb.png" },
  { country: "Belarus", code: "+375", flag: "by.png" },
  { country: "Belgium", code: "+32", flag: "be.png" },
  { country: "Belize", code: "+501", flag: "bz.png" },
  { country: "Benin", code: "+229", flag: "bj.png" },
  { country: "Bhutan", code: "+975", flag: "bt.png" },
  { country: "Bolivia", code: "+591", flag: "bo.png" },
  { country: "Bosnia and Herzegovina", code: "+387", flag: "ba.png" },
  { country: "Botswana", code: "+267", flag: "bw.png" },
  { country: "Brazil", code: "+55", flag: "br.png" },
  { country: "Brunei", code: "+673", flag: "bn.png" },
  { country: "Bulgaria", code: "+359", flag: "bg.png" },
  { country: "Burkina Faso", code: "+226", flag: "bf.png" },
  { country: "Burundi", code: "+257", flag: "bi.png" },
  { country: "Cabo Verde", code: "+238", flag: "cv.png" },
  { country: "Cambodia", code: "+855", flag: "kh.png" },
  { country: "Cameroon", code: "+237", flag: "cm.png" },
  { country: "Canada", code: "+1", flag: "ca.png" },
  { country: "Central African Republic", code: "+236", flag: "cf.png" },
  { country: "Chad", code: "+235", flag: "td.png" },
  { country: "Chile", code: "+56", flag: "cl.png" },
  { country: "China", code: "+86", flag: "cn.png" },
  { country: "Colombia", code: "+57", flag: "co.png" },
  { country: "Comoros", code: "+269", flag: "km.png" },
  { country: "Congo (Brazzaville)", code: "+242", flag: "cg.png" },
  { country: "Congo (Kinshasa)", code: "+243", flag: "cd.png" },
  { country: "Costa Rica", code: "+506", flag: "cr.png" },
  { country: "Croatia", code: "+385", flag: "hr.png" },
  { country: "Cuba", code: "+53", flag: "cu.png" },
  { country: "Cyprus", code: "+357", flag: "cy.png" },
  { country: "Czech Republic", code: "+420", flag: "cz.png" },
  { country: "Denmark", code: "+45", flag: "dk.png" },
  { country: "Djibouti", code: "+253", flag: "dj.png" },
  { country: "Dominica", code: "+1-767", flag: "dm.png" },
  { country: "Dominican Republic", code: "+1-809", flag: "do.png" },
  { country: "Ecuador", code: "+593", flag: "ec.png" },
  { country: "Egypt", code: "+20", flag: "eg.png" },
  { country: "El Salvador", code: "+503", flag: "sv.png" },
  { country: "Equatorial Guinea", code: "+240", flag: "gq.png" },
  { country: "Eritrea", code: "+291", flag: "er.png" },
  { country: "Estonia", code: "+372", flag: "ee.png" },
  { country: "Ethiopia", code: "+251", flag: "et.png" },
  { country: "Fiji", code: "+679", flag: "fj.png" },
  { country: "Finland", code: "+358", flag: "fi.png" },
  { country: "France", code: "+33", flag: "fr.png" },
  { country: "Gabon", code: "+241", flag: "ga.png" },
  { country: "Gambia", code: "+220", flag: "gm.png" },
  { country: "Georgia", code: "+995", flag: "ge.png" },
  { country: "Germany", code: "+49", flag: "de.png" },
  { country: "Ghana", code: "+233", flag: "gh.png" },
  { country: "Greece", code: "+30", flag: "gr.png" },
  { country: "Grenada", code: "+1-473", flag: "gd.png" },
  { country: "Guatemala", code: "+502", flag: "gt.png" },
  { country: "Guinea", code: "+224", flag: "gn.png" },
  { country: "Guinea-Bissau", code: "+245", flag: "gw.png" },
  { country: "Guyana", code: "+592", flag: "gy.png" },
  { country: "Haiti", code: "+509", flag: "ht.png" },
  { country: "Honduras", code: "+504", flag: "hn.png" },
  { country: "Hungary", code: "+36", flag: "hu.png" },
  { country: "Iceland", code: "+354", flag: "is.png" },
  { country: "India", code: "+91", flag: "in.png" },
  { country: "Indonesia", code: "+62", flag: "id.png" },
  { country: "Iran", code: "+98", flag: "ir.png" },
  { country: "Iraq", code: "+964", flag: "iq.png" },
  { country: "Ireland", code: "+353", flag: "ie.png" },
  { country: "Israel", code: "+972", flag: "il.png" },
  { country: "Italy", code: "+39", flag: "it.png" },
  { country: "Jamaica", code: "+1-876", flag: "jm.png" },
  { country: "Japan", code: "+81", flag: "jp.png" },
  { country: "Jordan", code: "+962", flag: "jo.png" },
  { country: "Kazakhstan", code: "+7", flag: "kz.png" },
  { country: "Kenya", code: "+254", flag: "ke.png" },
  { country: "Kiribati", code: "+686", flag: "ki.png" },
  { country: "Korea (North)", code: "+850", flag: "kp.png" },
  { country: "Korea (South)", code: "+82", flag: "kr.png" }
];



