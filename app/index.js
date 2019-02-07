'use strict';
import './style.scss';
const { createApolloFetch } = require('apollo-fetch');

const fetch = createApolloFetch({
  uri: 'https://us1.prisma.sh/miles-thompson-761e5b/factapi/dev',
});


var hash = window.location.hash;
if(hash) {

	var query = '{ agents { name } }';
	console.log(hash);
	if (hash==="#claims_all") {
		query = 
`query {
	claims {
		claim_text,
		claim_timestamp,
		created,
		submitted_by { name }
	}
}`;
	}

	
	fetch({
	  query: query,
	}).then(res => {
	  console.log(res.data);
	  document.querySelector('#json_query').innerHTML = query;
	  document.querySelector('#json_result').innerHTML = JSON.stringify(res.data, undefined, 2);
	});

}
