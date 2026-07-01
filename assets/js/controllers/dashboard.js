const sb = window.supabaseClient;

const menuItems = document.querySelectorAll('.menu-item[data-content]');
const contents = document.querySelectorAll('.content');

const signOutButton = document.getElementById('sign-out');
const employeeTrigger = document.getElementById('employee-trigger');
const employeeSubmenu = document.getElementById('employee-submenu');
const accountTrigger = document.getElementById('account-trigger');
const accountSubmenu = document.getElementById('account-submenu');
const operationsTrigger = document.getElementById('operation-trigger');
const operationsSubmenu = document.getElementById('operation-submenu');

employeeTrigger?.addEventListener('click', (e) => {
  e.preventDefault();
  employeeSubmenu.classList.toggle('open');
  employeeTrigger.classList.toggle('open');
  if (employeeSubmenu.classList.contains('open')) {
    employeeTrigger.querySelector('.fas').classList.replace('fa-chevron-down', 'fa-chevron-up');
  } else {
    employeeTrigger.querySelector('.fas').classList.replace('fa-chevron-up', 'fa-chevron-down');
  }
});

accountTrigger?.addEventListener('click', (e) => {
  e.preventDefault();
  accountSubmenu.classList.toggle('open');
  accountTrigger.classList.toggle('open');
  if (accountSubmenu.classList.contains('open')) {
    accountTrigger.querySelector('.fas').classList.replace('fa-chevron-down', 'fa-chevron-up');
  } else {
    accountTrigger.querySelector('.fas').classList.replace('fa-chevron-up', 'fa-chevron-down');
  }
});

operationsTrigger?.addEventListener('click', (e) => {
  e.preventDefault();
  operationsSubmenu.classList.toggle('open');
  operationsTrigger.classList.toggle('open');
  if (operationsSubmenu.classList.contains('open')) {
    operationsTrigger.querySelector('.fas').classList.replace('fa-chevron-down', 'fa-chevron-up');
  } else {
    operationsTrigger.querySelector('.fas').classList.replace('fa-chevron-up', 'fa-chevron-down');
  }
});

showContent('dashboard');

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.dataset.content;
    showContent(targetId);
  });
});

function showContent(contentId) {
  menuItems.forEach(item => {
    item.classList.toggle('active', item.dataset.content === contentId);
  });

  contents.forEach(section => {
    section.classList.toggle('active', section.id === contentId);
  });

  const title = contentId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  document.title = `${title} | Summit PhilBank`;
}

signOutButton?.addEventListener('click', () => {
  sessionStorage.clear();
  window.location.href = 'index.html';
});

/* Date */
const depositLiveDateTime = document.getElementById('deposit-live-datetime');
const withdrawLiveDateTime = document.getElementById('withdraw-live-datetime');
const transferLiveDateTime = document.getElementById('transfer-live-datetime');

function updateDateTime() {
  const now = new Date();
  depositLiveDateTime.value = now.toLocaleString();
  withdrawLiveDateTime.value = now.toLocaleString();
  transferLiveDateTime.value = now.toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);



//

//insert new Account 
// import { createAccount } from '../services/dashboardServices.js';

// const data = {
//   //Personaldata
//   account_first_name: document.getElementById('account-first-name').value,
//   account_last_name: document.getElementById('account-last-name').value,
//   account_date_of_birth: document.getElementById('account-birth').value,
//   account_gender: document.getElementById('account-gender').value,
//   account_id_type: document.getElementById('account-id-type').value,
//   account_id_number: document.getElementById('account-id-number').value,
//   account_marital: document.getElementById('account-marital').value,
//   account_email: document.getElementById('account-email').value,
//   account_contact: document.getElementById('account-contact').value,
//   //Address
//   account_postal: document.getElementById('account-postal').value,
//   account_address: document.getElementById('account-address').value,
//   account_city: document.getElementById('account-city').value,
//   //Account Details
//   account_title: document.getElementById('account-title').value,
//   account_type: document.getElementById('account-type').value,
//   account_initial_deposit: document.getElementById('account-initial-deposit').value,
//   account_status: true, 
//   account_created: new Date().getDate(),
//   account_updated: new Date().getDate()
// };