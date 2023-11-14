// Description: Fields for Facebook Product Sets
// Source: https://developers.facebook.com/docs/marketing-api/reference/product-set/

export const fields = [
    {
        name: 'age_group',
        type: 'enum',
        enum: ['adult', 'infant', 'kids', 'newborn', 'toddler'],
        description: 'The target age group for an item.'
    },
    {
        name: 'agent_fb_page_id',
        type: 'int',
        description: 'The Facebook Page ID for the real estate agent.'
    },
    {
        name: 'availability',
        type: 'enum',
        enum: ['available_soon', 'for_sale', 'for_rent', 'off_market', 'recently_sold', 'sale_pending', 'available for order', 'in stock', 'preorder', 'out of stock', 'available', 'not_available'],
        description: 'The availability for an item, home listing, or vehicle. Note: Vehicles that are unavailable in an ad are not visible to the public.'
    },
    {
        name: 'base_price_amount',
        type: 'int',
        description: 'The base price per night for a hotel. base_price and base_price_currency are required.'
    },
    {
        name: 'body_style',
        type: 'enum',
        enum: ['CONVERTIBLE', 'COUPE', 'CROSSOVER', 'HATCHBACK', 'MINIVAN', 'TRUCK', 'SEDAN', 'SMALL_CAR', 'SUV', 'VAN', 'WAGON', 'OTHER'],
        description: 'The body style of a vehicle. For Marketplace and dynamic ads.'
    },
    {
        name: 'brand',
        type: 'string',
        description: 'The brand of a product item or hotel.'
    },
    {
        name: 'category',
        type: 'string',
        description: 'The category of the product item.'
    },
    {
        name: 'city',
        type: 'string',
        description: 'The city where a hotel, destination, automobile dealership, or home listing is located.'
    },
    {
        name: 'city_id',
        type: 'int',
        description: 'The city ID where a hotel, destination, automobile dealership, or home listing is located.'
    },
    {
        name: 'city_page_id',
        type: 'string',
        description: 'The value to use in a deep link URL (template_URL) in ad creative.'
    },
    {
        name: 'color',
        type: 'string',
        description: 'The color of an item.'
    },
    {
        name: 'condition',
        type: 'enum',
        enum: ['new', 'refurbished', 'used', 'Excellent', 'Good', 'Fair', 'Poor', 'Other'],
        description: 'The condition of a product item or vehicle.'
    },
    {
        name: 'country',
        type: 'string',
        description: 'The country where a hotel, home listing, automobile dealership, or destination is located.'
    },
    {
        name: 'currency',
        type: 'string',
        description: 'The alpha currency code.'
    },
    {
        name: 'custom_label_0',
        type: 'string',
        description: 'The value for a custom label of a product item, hotel, destination, vehicle, or home listing.'
    },
    {
        name: 'custom_label_1',
        type: 'string',
        description: 'The value for a custom label of a product item, hotel, destination, vehicle, or home listing.'
    },
    {
        name: 'custom_label_2',
        type: 'string',
        description: 'The value for a custom label of a product item, hotel, destination, vehicle, or home listing.'
    },
    {
        name: 'custom_label_3',
        type: 'string',
        description: 'The value for a custom label of a product item, hotel, destination, vehicle, or home listing.'
    },
    {
        name: 'custom_label_4',
        type: 'string',
        description: 'The value for a custom label of a product item, hotel, destination, vehicle, or home listing.'
    },
    {
        name: 'date_first_on_lot',
        type: 'string',
        description: 'The date a vehicle first arrived at the dealership in YYYY-MM-DD format. For example, 2018-09-05.'
    },
    {
        name: 'date_first_on_lot_time',
        type: 'string',
        description: 'The date and time a vehicle first arrived at the dealership.'
    },
    {
        name: 'days_on_market',
        type: 'int',
        description: 'The number of days a home listing has been on the open market.'
    },
    {
        name: 'dealer_communication_channel',
        type: 'enum',
        enum: ['CHAT', 'LEAD_FORM'],
        description: 'The method which an automobile dealer will use to contact a buyer. LEAD_FORM is subject to regional availability and defaults to CHAT when not available.'
    },
    {
        name: 'dealer_id',
        type: 'string',
        description: 'The alphanumeric ID for an automobile dealership.'
    },
    {
        name: 'dealer_name',
        type: 'string',
        description: 'The name for the automobile dealership.'
    },
    {
        name: 'drivetrain',
        type: 'enum',
        enum: ['4X2', '4X4', 'AWD', 'FWD', 'RWD', 'Other'],
        description: 'The drivetrain for a vehicle.'
    },
    {
        name: 'description',
        type: 'string',
        description: 'The description for a flight, home listing, or destination.'
    },
    {
        name: 'destination_airport',
        type: 'string',
        description: 'The IATA code for the destination airport. For example, HKG, LAX, or LHR.'
    },
    {
        name: 'destination_city',
        type: 'string',
        description: 'The name of the destination city. For example, London, New York, or Tokyo.'
    },
    {
        name: 'destination_id',
        type: 'string',
        description: 'The unique ID for a destination within a catalog. This ID is also used for the content_id parameter in your destination app and pixel events.'
    },
    {
        name: 'exterior_color',
        type: 'string',
        description: 'The exterior color for a vehicle.'
    },
    {
        name: 'feed_id',
        type: 'string',
        description: 'The Facebook ID for the feed in which the product belongs.'
    },
    {
        name: 'flight_id',
        type: 'string',
        description: 'The unique ID for a flight.'
    },
    {
        name: 'fuel_type',
        type: 'enum',
        enum: ['DIESEL', 'ELECTRIC', 'GASOLINE', 'FLEX', 'HYBRID', 'OTHER'],
        description: 'The type of fuel designated for a vehicle.'
    },
    {
        name: 'furnish_type',
        type: 'enum',
        enum: ['furnished', 'semi-furnished', 'unfurnished'],
        description: 'The type of furnishing available for a home listing.'
    },
    {
        name: 'gender',
        type: 'enum',
        enum: ['female', 'male', 'unisex'],
        description: 'The gender for the product item.'
    },
    {
        name: 'home_listing_id',
        type: 'string',
        description: 'The unique ID for a home listing.'
    },
    {
        name: 'hotel_id',
        type: 'string',
        description: 'The unique ID for a hotel within a catalog. This ID is also used for the content_id parameter in your hotel app and pixel events.'
    },
    {
        name: 'image_tags',
        type: 'string',
        description: 'URLs and tags to describe images that are used in ads. Multiple tags can be associated with an image. For example, "Fitness Center", "Swimming Pool", or "Parking". For vehicles, follow this naming convention: (image[0].url, image[0].tag[0], image[0].tag[1]) where the tag value is incremented for each additional tag. When using a CSV/TSV file, use either an image header, image[0].url, image[1].url, and so on, or a JSON flatten string, "[{url:\'https://images.com/1.jpg\'},{url:\'https://images.com/2.jpg\'}]".'
    },
    {
        name: 'interior_color',
        type: 'string',
        description: 'The interior color for a vehicle.'
    },
    {
        name: 'listing_type',
        type: 'enum',
        enum: ['for_rent_by_agent', 'for_rent_by_owner', 'for_sale_by_agent', 'for_sale_by_owner', 'foreclosed', 'new_construction', 'new_listing'],
        description: 'The type of listing for a home.'
    },
    {
        name: 'make',
        type: 'string',
        description: 'The brand of a vehicle. For example, Ford, Toyota, or Kia.'
    },
    {
        name: 'margin_level',
        type: 'int',
        description: 'An indicator for the profitability of a hotel from 1 to 10.'
    },
    {
        name: 'market_id',
        type: 'int',
        description: 'The market where an offer is eligible. Use for TWO FEED use case, to correspond with the market feed. For regional offers, this field is required and should match the market_id provided in the market feed. For national offers (offers applicable to all of the U.S.), this field should be empty.'
    },
    {
        name: 'material',
        type: 'string',
        description: 'The material or fabric that a product is made of such as cotton, denim, or nylon.'
    },
    {
        name: 'mileage_unit',
        type: 'enum',
        enum: ['KM', 'MI'],
        description: 'The mileage unit of a vehicle in kilometers or miles.'
    },
    {
        name: 'mileage_value',
        type: 'int',
        description: 'The current mileage for a vehicle, in miles or kilometers. For new vehicles, use 0. Vehicles on Marketplace must have over 500 miles or kilometers.'
    },
    {
        name: 'model',
        type: 'string',
        description: 'The model for a vehicle such as "Ford Focus" where "Focus" is the model.'
    },
    {
        name: 'name',
        type: 'string',
        description: 'The name for a product item, hotel, home listing, or destination.'
    },
    {
        name: 'neighborhood',
        type: 'string',
        description: 'The neighborhood where a hotel or home listing is located. If there\'s more than one neighborhood, add additional columns for each one and use JSON-path syntax in each column name to indicate the number of neighborhoods.'
    },
    {
        name: 'neighborhood_id',
        type: 'string',
        description: 'The neighborhood ID for a product item.'
    },
    {
        name: 'num_baths',
        type: 'int',
        description: 'The total number of bathrooms for a home listing. Must be 1 at a minimum.'
    },
    {
        name: 'num_beds',
        type: 'int',
        description: 'The total number of bedrooms for a home listing. Can be 0 for a studio.'
    },
    {
        name: 'number_of_raters',
        type: 'int',
        description: 'The number of people who rated a hotel.'
    },
    {
        name: 'num_of_valid_guest_rating',
        type: 'string',
        description: 'Total number ratings for a hotel made by valid guests.'
    },
    {
        name: 'num_rooms',
        type: 'int',
        description: 'The total number of rooms for a home listing.'
    },
    {
        name: 'num_units',
        type: 'int',
        description: 'The total number of units available in an apartment or condo building.'
    },
    {
        name: 'offer_type',
        type: 'enum',
        enum: ['cash', 'finance', 'lease'],
        description: 'The type of offer for a home listing or vehicle.'
    },
    {
        name: 'one_way_price',
        type: 'string',
        description: 'One-way price for a flight. The currency must be specified, for example, 99.99 USD.'
    },
    {
        name: 'origin_airport',
        type: 'string',
        description: 'The IATA code for the airport where the flight originated.'
    },
    {
        name: 'origin_city',
        type: 'string',
        description: 'The name of the city where the flight originated.'
    },
    {
        name: 'pattern',
        type: 'string',
        description: 'The pattern or graphic print featured on a product. For example, "solid", "striped", or "polka dots".'
    },
    {
        name: 'postal_code',
        type: 'int',
        description: 'The postal or zip code for a hotel, home listing, or automobile dealership location. Optional for countries without a postal code system.'
    },
    {
        name: 'postal_codes',
        type: 'list',
        description: 'A list of postal codes for a specific market for vehicle offer ads.'
    },
    {
        name: 'price',
        type: 'float',
        description: 'The price for a flight, home listing, vehicle, or destination. The currency field is required.'
    },
    {
        name: 'price_amount',
        type: 'int',
        description: 'The price multiplied by 100, for all currencies. For example, $4.90USD will be 490 and ¥490JPY will be 49000.'
    },
    {
        name: 'price_change',
        type: 'string',
        description: 'The price change for a destination. For example, 0 for no price change, –10 for a 10% price decrease, and 20 for a 20% price increase.'
    },
    {
        name: 'priority',
        type: 'int',
        description: 'The priority of a flight or hotel. Values from 0 (lowest priority) to 5 (highest priority). A flight without a value defaults to 0.'
    },
    {
        name: 'product_expiration_time',
        type: 'string',
        description: 'The date and time when the product is no longer available. Ads will only fetch products that have not expired. For example, if the expiration date is today, after today this product will no longer appear in ads.'
    },
    {
        name: 'product_feed_id',
        type: 'int',
        description: 'The Facebook ID for the product feed for a product item, flight, hotel, home listing, vehicle, vehicle offer, or destination.'
    },
    {
        name: 'product_group_id',
        type: 'int',
        description: 'The Facebook ID for the product group of a product item.'
    },
    {
        name: 'product_item_id',
        type: 'int',
        description: 'The Facebook ID for a product item.'
    },
    {
        name: 'product_type',
        type: 'string',
        description: 'The category for a product item defined by the retailer.'
    },
    {
        name: 'property_type',
        type: 'enum',
        enum: ['apartment', 'condo', 'house', 'land', 'manufactured', 'townhouse', 'other', 'builder_floor', 'house_in_condominium', 'house_in_villa', 'loft', 'penthouse', 'studio'],
        description: 'The property type for a home listing.'
    },
    {
        name: 'rating_system',
        type: 'string',
        description: 'The rating system used for guest_rating. For example, "Expedia", or "TripAdvisor".'
    },
    {
        name: 'region',
        type: 'string',
        description: 'The state, county, region, or province for a home listing or automobile dealership.'
    },
    {
        name: 'region_id',
        type: 'uint32',
        description: 'The region ID for the location for a product item or automobile dealership.'
    },
    {
        name: 'retailer_id',
        type: 'string',
        description: 'The ID for the retailer.'
    },
    {
        name: 'retailer_product_group_id',
        type: 'int',
        description: 'The ID for a product group defined by the retailer.'
    },
    {
        name: 'sale_price',
        type: 'int',
        description: 'The sale price or special price for a vehicle.'
    },
    {
        name: 'sale_price_amount',
        type: 'int',
        description: 'The sale price for a product item (same format as price_amount). For hotels, the discounted sale price for a hotel stay, based on checkin_date and length_of_stay.'
    },
    {
        name: 'score',
        type: 'float',
        description: 'The rating score for a hotel.'
    },
    {
        name: 'size',
        type: 'string',
        description: 'The size for a product item such as for clothing or shoes.'
    },
    {
        name: 'star_rating_float',
        type: 'float',
        description: 'The star rating for a hotel.'
    },
    {
        name: 'state_of_vehicle',
        type: 'enum',
        enum: ['New', 'Used', 'CPO'],
        description: 'The current state of a vehicle.'
    },
    {
        name: 'title',
        type: 'string',
        description: 'The full name for a vehicle including year, make, model, and trim. Maximum of 500 characters. For example, 2014 Nissan Versa Note S Hatchback 4D.'
    },
    {
        name: 'transmission',
        type: 'enum',
        enum: ['Automatic', 'Manual'],
        description: 'The transmission type for a vehicle.'
    },
    {
        name: 'trim',
        type: 'string',
        description: 'The trim for a vehicle: 5DR HB SE Max characters: 50.'
    },
    {
        name: 'url',
        type: 'string',
        description: 'The link to an external site where you can view a flight. Deep links specified on the ad level take precedence.'
    },
    {
        name: 'vehicle_ID',
        type: 'int',
        description: 'The unique ID for a vehicle. This ID is also used for the content_id parameter in the pixel. If the same ID is used in multiple instances, all instances are ignored. For vehicle offers, it is the ID that advertisers can use to identify an offer.'
    },
    {
        name: 'vehicle_registration_plate',
        type: 'string',
        description: 'A metal or plastic plate attached to a motor vehicle or trailer for official identification purposes. For Marketplace, a vehicle registration plate is required in Brazil, France, and the United Kingdom.'
    },
    {
        name: 'vehicle_type',
        type: 'enum',
        enum: ['car_truck', 'boat', 'commercial', 'motorcycle', 'powersport', 'rv_camper', 'trailer', 'other'],
        description: 'The type of vehicle. car_truck is the default value.'
    },
    {
        name: 'vendor_ID',
        type: 'int',
        description: 'The ID for a vendor.'
    },
    {
        name: 'vin',
        type: 'int',
        description: 'The vehicle identification number. The VIN must be exactly 17 characters and is required in all countries where Marketplace is available with the exception of pre-1983 vehicles. In Brazil, France, and the United Kingdom, a vehicle registration plate is required instead of a VIN.'
    },
    {
        name: 'visibility',
        type: 'enum',
        enum: ['published', 'staging', 'hidden', 'whitelist_only'],
        description: 'Visibility for a product item. Items in staging mode are not visible to buyers and are not available for product tagging on Instagram or in dynamic ads.'
    },
    {
        name: 'year',
        type: 'int',
        description: 'The year for a vehicle.'
    }
]