
///////////////////////////////////////////////////////////////////////
/////////////////// configure client object       ////////////////////
//////////////////////////////////////////////////////////////////////
const uuidv1 = require('uuid/v1');

const objStore = [
  {
	name: "Acme Industries",
	image: '',
  addr1: '1234 Main Street',
	addr2: 'Suite 1235',
  city: 'Richmond',
  state:'Virginia',
	zip: '12345',
	contact: 'Bill Smith',
	phone: '704-555-1212',
  isActivated: false,
  accessToken: "useless1",
  },
  {
	name: "Strategic Machines (test local)",
  image: '',
  addr1: '1234 Main Street',
	addr2: 'Suite 1235',
  city: 'Richmond',
	state:'Virginia',
	zip: '12345',
  contact: 'ChaoticRoute',
	phone: '704-555-1212',
	sms: "+17042289191",
	web: "demo",
	dbname: "client1",
	urilocal: "mongodb://localhost:27017/",
	uri: "mongodb://auto:B0ston@ds157057.mlab.com:57057/",
	username: "auto",
	password: "Bost0n",
  isActivated: true,
  accessToken: "useless101",
	},
	{
	name: "Strategic Machines (test cloud)",
  image: '',
  addr1: '1234 Main Street',
	addr2: 'Suite 1235',
  city: 'Richmond',
	state:'Virginia',
	zip: '12345',
	contact: 'Machine',
	phone: '704-555-1212',
	sms: "+19148195104",
	web: "demo",
	dbname: "client2",
	uri: "mongodb://auto:B0ston@ds251889.mlab.com:51889/",
	username: "auto",
	password: "B0ston",
  isActivated: true,
  accessToken: "useless102",
},
  {
	name: "Beta Industries",
	image: '',
  addr1: '1234 Main Street',
	addr2: 'Suite 1235',
  city: 'Richmond',
	state:'Virginia',
  zip: '12345',
  accessToken: "7y54ueo4",
	contact: 'Bill Jones',
	phone: '704-555-1212',
  isPrivate: false,
  isActivated: false,
  accessToken: "useless4",
  },
  {
	name: "Alpha Industries",
	image: '',
  addr1: '1234 Main Street',
	addr2: 'Suite 1235',
  city: 'Richmond',
	state:'Virginia',
  zip: '12345',
  accessToken: "5aef0a1fe1f6ba712cfa47aa",
	contact: 'Bill Alpha',
	phone: '704-555-1212',
  isPrivate: false,
  isActivated: false,
  },
  {
	name: "Mercy (test db)",
  image: '',
  addr1: '1234 Main Street',
	addr2: 'Suite 1235',
  city: 'Richmond',
	state:'Virginia',
	zip: '12345',
	sms: "+19802294921",
	web: "mercy",
	dbname: "client3",
	uri: "mongodb://auto:B0ston@ds251889.mlab.com:51889/",
	username: "auto",
	password: "B0ston",
	contact: 'Charlie King',
	phone: '704-555-1212',
  isPrivate: false,
  isActivated: true,
  accessToken: "useless6",
	},
  {
  name: "Pivot and Scale",
  image: '',
  addr1: '1234 Main Street',
  addr2: 'Suite 1235',
  city: 'Annapolis',
  state:'MD',
  zip: '12345',
  contact: 'Dave',
  phone: '+17042282288',
  isActivated: false,
  accessToken: "useless7",
  },
  {
  name: "Medical Center",
  image: '',
  addr1: '1234 Main Street',
  addr2: 'Suite 1235',
  city: 'Annapolis',
  state:'MD',
  zip: '12345',
  contact: 'Nurse',
  phone: '+17045551212',
  isActivated: false,
  accessToken: "useless8",

  },
  {
  name: "Software company",
  image: '',
  addr1: '1234 Main Street',
  addr2: 'Suite 1235',
  city: 'Charlotte',
  state:'NC',
  zip: '12345',
  contact: 'Mike',
  phone: '+17045551111',
  isActivated: false,
  accessToken: "useless9",
  },
  {
  name: "Utility",
  image: '',
  addr1: '1234 Main Street',
  addr2: 'Suite 1235',
  city: 'Charlotte',
  state:'NC',
  zip: '12345',
  contact: 'Uko',
  phone: '+19192223333',
  isActivated: false,
  accessToken: "useless10",
  },
  {
  name: "IBM",
  image: 'http://res.cloudinary.com/strategicmachinestest/image/upload/v1526233790/logos/640px-IBM_logo.svg_xd3fxs.png',
  addr1: '1234 Main Street',
  addr2: 'Suite 1235',
  city: 'Armonk',
  state:'NY',
  zip: '12345',
  contact: 'Janna',
  phone: '+12124454444',
  isActivated: false,
  accessToken: "useless11",
  },
  {
  name: "xio partners",
  image: 'http://res.cloudinary.com/strategicmachinestest/image/upload/v1526342752/logos/XIOtechnologies_554x207_avmedn.jpg',
  addr1: '1234 Main Street',
  addr2: 'Suite 1235',
  city: 'Charlotte',
  state:'NC',
  zip: '12345',
  contact: 'Pat',
  phone: '+17044445555',
  isActivated: false,
  accessToken: "useless12",
  }

]

module.exports = objStore;