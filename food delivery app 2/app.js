import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
          alt="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Card = (promps) => {
  const { resList } = promps;
  return (
    <div className="res-card">
      <img
        className="Meghana-img"
        src=""
        alt="food img"
      />
      <h3>{resList.name}</h3>
      <h4>{resList.cuisines}</h4>
      <h4>{resList.avgRating}</h4>
      <h4>{resList.costForTwo}</h4>
      <h4>{resList.slaString}</h4>
    </div>
  );
};

const cardList=
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "layout": {
                            "columns": 4
                        },
                        "id": "restaurant_grid_listing",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                "restaurants": [
                                    {
                                        "info": {
                                            "id": "616168",
                                            "name": "Chai Chawni Cafe",
                                            "cloudinaryImageId": "bzy3r7cjnvxtiz2yjgwq",
                                            "locality": "Shrivastav Colony",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Snacks",
                                                "Pizzas",
                                                "Chinese",
                                                "Fast Food"
                                            ],
                                            "veg": true,
                                            "parentId": "456411",
                                            "avgRatingString": "--",
                                            "sla": {
                                                "deliveryTime": 54,
                                                "lastMileTravel": 11.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "11.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 22:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/chai-chawni-cafe-shrivastav-colony-chhindwara-locality-chhindwara-616168",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "871305",
                                            "name": "Foodies Cafeteria",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/c36ea002-0339-493d-9334-b93011c2c716_871305.jpg",
                                            "locality": "Mohan Nagar",
                                            "areaName": "Chhindwara City",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Fast Food",
                                                "Beverages",
                                                "Snacks",
                                                "pizza"
                                            ],
                                            "veg": true,
                                            "parentId": "510820",
                                            "avgRatingString": "NEW",
                                            "sla": {
                                                "deliveryTime": 52,
                                                "lastMileTravel": 12.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "12.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/foodies-cafeteria-mohan-nagar-chhindwara-city-chhindwara-871305",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "639923",
                                            "name": "Rich Table Restaurant N Cafe",
                                            "cloudinaryImageId": "yfkdpxgs27rs6m7gorkc",
                                            "locality": "PG College Road",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "South Indian",
                                                "Chinese",
                                                "Beverages",
                                                "Fast Food",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "386032",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "9",
                                            "sla": {
                                                "deliveryTime": 54,
                                                "lastMileTravel": 11.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "11.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 21:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {
                                                "header": "25% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "25% off up to ₹65 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ]
                                            },
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/rich-table-restaurant-n-cafe-pg-college-road-chhindwara-locality-chhindwara-639923",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "905532",
                                            "name": "CAFE CIAO BELLA",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/4ad40749-7039-4714-be3b-d31c6228974f_905532.jpg",
                                            "locality": "satkar building",
                                            "areaName": "Chhindwara City",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Fast Food",
                                                "Burgers",
                                                "Cafe"
                                            ],
                                            "veg": true,
                                            "parentId": "526204",
                                            "avgRatingString": "NEW",
                                            "sla": {
                                                "deliveryTime": 49,
                                                "lastMileTravel": 11.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "11.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/cafe-ciao-bella-satkar-building-chhindwara-city-chhindwara-905532",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "460758",
                                            "name": "Shree balaji chineese center",
                                            "cloudinaryImageId": "ofjn39gnpkzhkllfishc",
                                            "locality": "Chhindwara City",
                                            "areaName": "Chhindwara City",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Chinese"
                                            ],
                                            "veg": true,
                                            "parentId": "276852",
                                            "avgRatingString": "--",
                                            "sla": {
                                                "deliveryTime": 45,
                                                "lastMileTravel": 10.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "10.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 22:15:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/shree-balaji-chineese-center-chhindwara-city-chhindwara-460758",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "769856",
                                            "name": "T & T Cafe",
                                            "cloudinaryImageId": "bfaec295549f235119a9302fade5857a",
                                            "locality": "Mohobey Market",
                                            "areaName": "Chhindwara City",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "459733",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "5",
                                            "sla": {
                                                "deliveryTime": 55,
                                                "lastMileTravel": 10.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "10.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 21:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {
                                                "header": "40% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ]
                                            },
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/t-and-t-cafe-mohobey-market-chhindwara-city-chhindwara-769856",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "849437",
                                            "name": "Famous Dum Biryani",
                                            "cloudinaryImageId": "f594f4f63d3e00e93203f02d40e38d24",
                                            "locality": "Teacher's Colony",
                                            "areaName": "Chhindwara City",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Biryani",
                                                " North Indian",
                                                " Chinese",
                                                " Fast Food"
                                            ],
                                            "veg": true,
                                            "parentId": "500685",
                                            "avgRatingString": "NEW",
                                            "sla": {
                                                "deliveryTime": 57,
                                                "lastMileTravel": 12.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "55-60 mins",
                                                "lastMileTravelString": "12.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {
                                                "header": "₹250 OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use FLATDEAL",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "FLAT250 off | Use FLATDEAL",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ]
                                            },
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "20+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/famous-dum-biryani-teachers-colony-chhindwara-city-chhindwara-849437",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "566910",
                                            "name": "Cafe 4 You",
                                            "cloudinaryImageId": "csydbpxxnzheyxer7rcl",
                                            "locality": "Subhash Park",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Fast Food",
                                                "Chinese",
                                                "Beverages"
                                            ],
                                            "avgRating": 3.7,
                                            "veg": true,
                                            "parentId": "340675",
                                            "avgRatingString": "3.7",
                                            "totalRatingsString": "8",
                                            "sla": {
                                                "deliveryTime": 47,
                                                "lastMileTravel": 10.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "10.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {
                                                "header": "10% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ]
                                            },
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/cafe-4-you-subhash-park-chhindwara-locality-chhindwara-566910",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "655474",
                                            "name": "You And Me Cafe",
                                            "cloudinaryImageId": "6b7ab6c81944a491c8436cee302a9243",
                                            "locality": "Guraiya Road",
                                            "areaName": "Rautha Wada",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Cafe",
                                                "Fast Food",
                                                "Italian",
                                                "Snacks"
                                            ],
                                            "veg": true,
                                            "parentId": "394230",
                                            "avgRatingString": "--",
                                            "sla": {
                                                "deliveryTime": 57,
                                                "lastMileTravel": 12.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "55-60 mins",
                                                "lastMileTravelString": "12.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "5.0",
                                                    "ratingCount": "3"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/you-and-me-cafe-guraiya-road-rautha-wada-chhindwara-655474",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "795047",
                                            "name": "New Radhey Shyam Choule Bhature Delhi Wala",
                                            "cloudinaryImageId": "0adf25c57357161b20c11281d8a443e6",
                                            "locality": "VIP Road",
                                            "areaName": "Mohan Nagar",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Snacks",
                                                "Chinese"
                                            ],
                                            "avgRating": 2.9,
                                            "veg": true,
                                            "parentId": "475337",
                                            "avgRatingString": "2.9",
                                            "totalRatingsString": "3",
                                            "sla": {
                                                "deliveryTime": 53,
                                                "lastMileTravel": 11.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "11.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/new-radhey-shyam-choule-bhature-delhi-wala-vip-road-mohan-nagar-chhindwara-795047",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "694041",
                                            "name": "Swadist Restaurant",
                                            "cloudinaryImageId": "ed363980200bf88492b54d52fc44ee38",
                                            "locality": "Model Road",
                                            "areaName": "Chhindwara City",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Indian"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "198788",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "10+",
                                            "sla": {
                                                "deliveryTime": 55,
                                                "lastMileTravel": 12.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "12.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/swadist-restaurant-model-road-chhindwara-city-chhindwara-694041",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "252648",
                                            "name": "Creation Cakes & Goli wada Pav",
                                            "cloudinaryImageId": "eus2klekzi5yolgoxzjw",
                                            "locality": "Chhindwara City",
                                            "areaName": "Chhindwara City",
                                            "costForTwo": "₹150 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Beverages",
                                                "Indian"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "66064",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "3",
                                            "sla": {
                                                "deliveryTime": 45,
                                                "lastMileTravel": 10.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "10.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 18:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/creation-cakes-and-goli-wada-pav-chhindwara-city-chhindwara-252648",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "344937",
                                            "name": "Myfit Meals - Meal Prep Co.",
                                            "cloudinaryImageId": "smo2yv6budwe0ciye1ry",
                                            "locality": "Teacher's Colony",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹220 for two",
                                            "cuisines": [
                                                "Continental",
                                                "Salads"
                                            ],
                                            "avgRating": 4.7,
                                            "parentId": "142688",
                                            "avgRatingString": "4.7",
                                            "totalRatingsString": "10+",
                                            "sla": {
                                                "deliveryTime": 57,
                                                "lastMileTravel": 13.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "55-60 mins",
                                                "lastMileTravelString": "13.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-07-27 20:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/myfit-meals-meal-prep-co-teachers-colony-chhindwara-locality-chhindwara-344937",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "769851",
                                            "name": "Healthy Bites",
                                            "cloudinaryImageId": "4dfbe240cf1a2be01e6f2805c75c4279",
                                            "locality": "Collectrate Road",
                                            "areaName": "Chhindwara City",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Salads"
                                            ],
                                            "veg": true,
                                            "parentId": "3143",
                                            "avgRatingString": "--",
                                            "sla": {
                                                "deliveryTime": 49,
                                                "lastMileTravel": 11.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "11.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextOpenTimeMessage": "Opens next at 3 pm, today"
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/healthy-bites-collectrate-road-chhindwara-city-chhindwara-769851",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "751485",
                                            "name": "Sai Nasta And Food Corner",
                                            "cloudinaryImageId": "578d0ab17d249663db3d714764db9faa",
                                            "locality": "Medical College",
                                            "areaName": "Chhindwara City",
                                            "costForTwo": "₹246 for two",
                                            "cuisines": [
                                                "Chinese"
                                            ],
                                            "veg": true,
                                            "parentId": "444966",
                                            "avgRatingString": "--",
                                            "sla": {
                                                "deliveryTime": 52,
                                                "lastMileTravel": 11.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "11.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextOpenTimeMessage": "Opens next at 4 pm, today"
                                            },
                                            "badges": {},
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/sai-nasta-and-food-corner-medical-college-chhindwara-city-chhindwara-751485",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    }
                                ],
                                "theme": "SeoRestaurantListingGridWidget"
                            }
                        }
                    }
                }
            }
        
const resList = [
  
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "layout": {
          "columns": 4
        },
        "id": "restaurant_grid_listing",
        "gridElements": {
          "infoWithStyle": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
            "restaurants": [
              {
                "info": {
                  "id": "616168",
                  "name": "Chai Chawni Cafe",
                  "cloudinaryImageId": "bzy3r7cjnvxtiz2yjgwq",
                  "locality": "Shrivastav Colony",
                  "areaName": "Chhindwara Locality",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Snacks",
                    "Pizzas",
                    "Chinese",
                    "Fast Food"
                  ],
                  "veg": true,
                  "parentId": "456411",
                  "avgRatingString": "--",
                  "sla": {
                    "deliveryTime": 54,
                    "lastMileTravel": 11.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "11.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 22:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/chai-chawni-cafe-shrivastav-colony-chhindwara-locality-chhindwara-616168",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "871305",
                  "name": "Foodies Cafeteria",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/c36ea002-0339-493d-9334-b93011c2c716_871305.jpg",
                  "locality": "Mohan Nagar",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Fast Food",
                    "Beverages",
                    "Snacks",
                    "pizza"
                  ],
                  "veg": true,
                  "parentId": "510820",
                  "avgRatingString": "NEW",
                  "sla": {
                    "deliveryTime": 52,
                    "lastMileTravel": 12.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "12.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 23:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "isNewlyOnboarded": true,
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/foodies-cafeteria-mohan-nagar-chhindwara-city-chhindwara-871305",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "639923",
                  "name": "Rich Table Restaurant N Cafe",
                  "cloudinaryImageId": "yfkdpxgs27rs6m7gorkc",
                  "locality": "PG College Road",
                  "areaName": "Chhindwara Locality",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "North Indian",
                    "South Indian",
                    "Chinese",
                    "Beverages",
                    "Fast Food",
                    "Desserts"
                  ],
                  "avgRating": 4.4,
                  "veg": true,
                  "parentId": "386032",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "9",
                  "sla": {
                    "deliveryTime": 54,
                    "lastMileTravel": 11.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "11.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 21:30:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
                    "header": "25% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "25% off up to ₹65 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ]
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/rich-table-restaurant-n-cafe-pg-college-road-chhindwara-locality-chhindwara-639923",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "905532",
                  "name": "CAFE CIAO BELLA",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/4ad40749-7039-4714-be3b-d31c6228974f_905532.jpg",
                  "locality": "satkar building",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Fast Food",
                    "Burgers",
                    "Cafe"
                  ],
                  "veg": true,
                  "parentId": "526204",
                  "avgRatingString": "NEW",
                  "sla": {
                    "deliveryTime": 49,
                    "lastMileTravel": 11.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "11.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 23:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "isNewlyOnboarded": true,
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/cafe-ciao-bella-satkar-building-chhindwara-city-chhindwara-905532",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "460758",
                  "name": "Shree balaji chineese center",
                  "cloudinaryImageId": "ofjn39gnpkzhkllfishc",
                  "locality": "Chhindwara City",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Chinese"
                  ],
                  "veg": true,
                  "parentId": "276852",
                  "avgRatingString": "--",
                  "sla": {
                    "deliveryTime": 45,
                    "lastMileTravel": 10.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "10.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 22:15:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/shree-balaji-chineese-center-chhindwara-city-chhindwara-460758",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "769856",
                  "name": "T & T Cafe",
                  "cloudinaryImageId": "bfaec295549f235119a9302fade5857a",
                  "locality": "Mohobey Market",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Chinese",
                    "Beverages"
                  ],
                  "avgRating": 4.2,
                  "veg": true,
                  "parentId": "459733",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "5",
                  "sla": {
                    "deliveryTime": 55,
                    "lastMileTravel": 10.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "10.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 21:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
                    "header": "40% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ]
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/t-and-t-cafe-mohobey-market-chhindwara-city-chhindwara-769856",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "849437",
                  "name": "Famous Dum Biryani",
                  "cloudinaryImageId": "f594f4f63d3e00e93203f02d40e38d24",
                  "locality": "Teacher's Colony",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Biryani",
                    " North Indian",
                    " Chinese",
                    " Fast Food"
                  ],
                  "veg": true,
                  "parentId": "500685",
                  "avgRatingString": "NEW",
                  "sla": {
                    "deliveryTime": 57,
                    "lastMileTravel": 12.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "55-60 mins",
                    "lastMileTravelString": "12.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 23:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
                    "header": "₹250 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT250 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ]
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "isNewlyOnboarded": true,
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "3.9",
                      "ratingCount": "20+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/famous-dum-biryani-teachers-colony-chhindwara-city-chhindwara-849437",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "566910",
                  "name": "Cafe 4 You",
                  "cloudinaryImageId": "csydbpxxnzheyxer7rcl",
                  "locality": "Subhash Park",
                  "areaName": "Chhindwara Locality",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Fast Food",
                    "Chinese",
                    "Beverages"
                  ],
                  "avgRating": 3.7,
                  "veg": true,
                  "parentId": "340675",
                  "avgRatingString": "3.7",
                  "totalRatingsString": "8",
                  "sla": {
                    "deliveryTime": 47,
                    "lastMileTravel": 10.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "10.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 23:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
                    "header": "10% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ]
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/cafe-4-you-subhash-park-chhindwara-locality-chhindwara-566910",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "655474",
                  "name": "You And Me Cafe",
                  "cloudinaryImageId": "6b7ab6c81944a491c8436cee302a9243",
                  "locality": "Guraiya Road",
                  "areaName": "Rautha Wada",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Cafe",
                    "Fast Food",
                    "Italian",
                    "Snacks"
                  ],
                  "veg": true,
                  "parentId": "394230",
                  "avgRatingString": "--",
                  "sla": {
                    "deliveryTime": 57,
                    "lastMileTravel": 12.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "55-60 mins",
                    "lastMileTravelString": "12.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 22:30:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "5.0",
                      "ratingCount": "3"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/you-and-me-cafe-guraiya-road-rautha-wada-chhindwara-655474",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "795047",
                  "name": "New Radhey Shyam Choule Bhature Delhi Wala",
                  "cloudinaryImageId": "0adf25c57357161b20c11281d8a443e6",
                  "locality": "VIP Road",
                  "areaName": "Mohan Nagar",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Snacks",
                    "Chinese"
                  ],
                  "avgRating": 2.9,
                  "veg": true,
                  "parentId": "475337",
                  "avgRatingString": "2.9",
                  "totalRatingsString": "3",
                  "sla": {
                    "deliveryTime": 53,
                    "lastMileTravel": 11.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "11.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 23:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/new-radhey-shyam-choule-bhature-delhi-wala-vip-road-mohan-nagar-chhindwara-795047",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "694041",
                  "name": "Swadist Restaurant",
                  "cloudinaryImageId": "ed363980200bf88492b54d52fc44ee38",
                  "locality": "Model Road",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Indian"
                  ],
                  "avgRating": 4.4,
                  "parentId": "198788",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "10+",
                  "sla": {
                    "deliveryTime": 55,
                    "lastMileTravel": 12.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "12.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 23:00:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/swadist-restaurant-model-road-chhindwara-city-chhindwara-694041",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "252648",
                  "name": "Creation Cakes & Goli wada Pav",
                  "cloudinaryImageId": "eus2klekzi5yolgoxzjw",
                  "locality": "Chhindwara City",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹150 for two",
                  "cuisines": [
                    "Bakery",
                    "Beverages",
                    "Indian"
                  ],
                  "avgRating": 4.5,
                  "veg": true,
                  "parentId": "66064",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "3",
                  "sla": {
                    "deliveryTime": 45,
                    "lastMileTravel": 10.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "10.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 18:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/creation-cakes-and-goli-wada-pav-chhindwara-city-chhindwara-252648",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "344937",
                  "name": "Myfit Meals - Meal Prep Co.",
                  "cloudinaryImageId": "smo2yv6budwe0ciye1ry",
                  "locality": "Teacher's Colony",
                  "areaName": "Chhindwara Locality",
                  "costForTwo": "₹220 for two",
                  "cuisines": [
                    "Continental",
                    "Salads"
                  ],
                  "avgRating": 4.7,
                  "parentId": "142688",
                  "avgRatingString": "4.7",
                  "totalRatingsString": "10+",
                  "sla": {
                    "deliveryTime": 57,
                    "lastMileTravel": 13.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "55-60 mins",
                    "lastMileTravelString": "13.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-07-27 20:30:00",
                    "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/myfit-meals-meal-prep-co-teachers-colony-chhindwara-locality-chhindwara-344937",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "769851",
                  "name": "Healthy Bites",
                  "cloudinaryImageId": "4dfbe240cf1a2be01e6f2805c75c4279",
                  "locality": "Collectrate Road",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Salads"
                  ],
                  "veg": true,
                  "parentId": "3143",
                  "avgRatingString": "--",
                  "sla": {
                    "deliveryTime": 49,
                    "lastMileTravel": 11.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "11.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextOpenTimeMessage": "Opens next at 3 pm, today"
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/healthy-bites-collectrate-road-chhindwara-city-chhindwara-769851",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              },
              {
                "info": {
                  "id": "751485",
                  "name": "Sai Nasta And Food Corner",
                  "cloudinaryImageId": "578d0ab17d249663db3d714764db9faa",
                  "locality": "Medical College",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹246 for two",
                  "cuisines": [
                    "Chinese"
                  ],
                  "veg": true,
                  "parentId": "444966",
                  "avgRatingString": "--",
                  "sla": {
                    "deliveryTime": 52,
                    "lastMileTravel": 11.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "11.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextOpenTimeMessage": "Opens next at 4 pm, today"
                  },
                  "badges": {},
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {}
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                    }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-54db5c29-4787-4c64-aa46-f202fb8d1584"
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/sai-nasta-and-food-corner-medical-college-chhindwara-city-chhindwara-751485",
                  "text": "RESTAURANT_MENU",
                  "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
              }
            ],
            "theme": "SeoRestaurantListingGridWidget"
          }
        }
      }
    }
  }
]

const Body = () => {
  return (
    <div className="mainbody">
      <div className="search1">
        <input className="search" type="text" placeholder="Search for food"></input>
      </div>
      <div className="res-container">
        <Card
          resData={cardList[0]}
        />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
