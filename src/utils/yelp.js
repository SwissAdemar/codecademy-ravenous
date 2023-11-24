const yelpBaseUrl = 'https://api.yelp.com/v3';

const searchBusiness = async (term, location, sortBy) => {
    const corsOverride = 'https://cors-anywhere.herokuapp.com/';
    const searchEndpoint = '/businesses/search';
    const queryParams = `?term=${term}&location=${location}&sort_by=${sortBy}&limit=18`;
    const urlToFetch = `${corsOverride}${yelpBaseUrl}${searchEndpoint}${queryParams}`;
    
    try {
        const response = await fetch(urlToFetch, {
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
            }
        });

        if(response.ok){
            const jsonResponse = await response.json();
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
            })
        }
    }
    catch(error){
        console.error(error);
    }
}

export default searchBusiness;