import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import SearchListing from "./SearchListing";
import PostListing from "./PostListing";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import AboutContact from "./AboutContact";

// Create Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
function BottomTabNavigator({ listings, setListings }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Search"
        // Passing the listings prop to SearchListing
        children={() => <SearchListing listings={listings} />}
      />
      <Tab.Screen
        name="Post"
        // Passing setListings prop to PostListing
        children={() => (
          <PostListing listings={listings} setListings={setListings} />
        )}
      />
      <Tab.Screen name="AboutUs" component={AboutContact} />
    </Tab.Navigator>
  );
}

export default function App() {
  const initialListings = [
    {
      id: 1,
      title: "Cozy Apartment",
      description: "2 BHK near the park",
      location: "New York",
      price: "1200",
      bedrooms: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Luxury Condo",
      description: "3 BHK with a sea view",
      location: "Los Angeles",
      price: "2500",
      bedrooms: 3,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Suburban House",
      description: "4 BHK with backyard",
      location: "Chicago",
      price: "1800",
      bedrooms: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Modern Studio",
      description: "Studio in the city center",
      location: "San Francisco",
      price: "1000",
      bedrooms: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Family Home",
      description: "5 BHK with garage",
      location: "Austin",
      price: "2200",
      bedrooms: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Mountain Retreat",
      description: "2 BHK in the mountains",
      location: "Denver",
      price: "1300",
      bedrooms: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Beach House",
      description: "3 BHK with ocean view",
      location: "Miami",
      price: "3000",
      bedrooms: 3,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      title: "Urban Loft",
      description: "1 BHK in downtown",
      location: "Seattle",
      price: "1500",
      bedrooms: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      title: "Country Cottage",
      description: "3 BHK with garden",
      location: "Nashville",
      price: "1700",
      bedrooms: 3,
      image: "https://via.placeholder.com/150",
    },
  ];
  const [listings, setListings] = useState(initialListings); // shared state for listings
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Main" : "Login"}>
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{ headerShown: false }}
        />

        {/* Main App Screen */}
        <Stack.Screen
          name="Main"
          // Passing listings and setListings props to BottomTabNavigator
          children={() => (
            <BottomTabNavigator listings={listings} setListings={setListings} />
          )}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
