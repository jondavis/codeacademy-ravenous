const apiKey = 'AyEaHY0H40vaOh6M5-unkotX9g1O5W3BaXJEnNkRWfLW16kEKBgeB4g0VYfMSGDDLy6xAalmFyom402ohZ6bJotnwetDM-1MeH_9MiWxJKiY-BLKLNaVO5yf_WVCXHYx';

const Yelp = {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				console.log(jsonResponse.businesses);
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count
					}
				});
			}
		});
	}
}

export default Yelp
