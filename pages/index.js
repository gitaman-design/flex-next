import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import banner from './assets/banner.png'
import howWork from './assets/how-works.jpg'
import pin from './assets/pin.png'
import rupee from './assets/rupee.png'
import chair from './assets/chair.png'
import Query from './api/query/query'
import CITY_QUERY from './api/query/category'
import CATE_QUERY from './api/query/categories'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { Spin, Skeleton, Space } from 'antd';
import { useRouter } from "next/router"
import ios from './assets/ios-store.png'
import android from './assets/apk-app.png'
import app from './assets/appscreen@2x.png'
import search from './assets/search.svg'
import shop from './assets/shop.svg'
import house from './assets/house.svg'
import user from './assets/user.svg'
import partner1 from './assets/patner-1.png'
import partner2 from './assets/patner-2.png'
import partner3 from './assets/patner-3.png'
import partner4 from './assets/patner-4.png'
import partner5 from './assets/patner-5.png'
import axios from "axios";



const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
    window.BigRadar?.open()
}


export default function Home({ voCities }) {

    const [cities, setCities] = useState([]);
    const [types, setTypes] = useState([]);

  const url = "http://in.flexispaces.com/api/";

    
    


    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);



        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }

    }, [])

    if (loading) {
        return <div className="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">

            <Space>
                <Skeleton.Image active size={500} />
                <Skeleton.Image active size={"large"} />
                <Skeleton.Image active size={"large"} />
            </Space>

            <Skeleton active paragraph={{ rows: 8 }} />


        </div>
    }



     useEffect(() => {
       getCity();
     }, []);

     const getCity = async () => {
        
         const { data } = await axios.get(`${url}cities`);
         console.log(data)
        
        //  axios
        //  .get(`${url}cities`)
        //  .then((response) => {
        //    const allCity = response.data;
        //    console.log(response.data);
        //    setCities(allCity);
        //  })
        //  .catch((error) => console.error(`Error: ${error}`));
     };
    
    
    return (
      <div className="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">
        <Head>
          {/* HTML Meta Tags */}
          <title> Find Coworking Spaces in India - Coworly </title>
          <meta
            name="description"
            content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities."
          />

          {/* Google / Search Engine Tags */}
          <meta
            itemprop="name"
            content="Find Coworking Spaces in India - Coworly"
          />
          <meta
            itemprop="description"
            content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities."
          />
          <meta
            itemprop="image"
            content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg"
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://coworly.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Find Coworking Spaces in India - Coworly"
          />
          <meta
            property="og:description"
            content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities."
          />
          <meta
            property="og:image"
            content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Find Coworking Spaces in India - Coworly"
          />
          <meta
            name="twitter:description"
            content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities."
          />
          <meta
            name="twitter:image"
            content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div class="mt-10 lg:flex">
          <div class="lg:pt-16 xl:w-6/12 xl:pt-24">
            <h1 class="text-4xl font-semibold xl:text-5xl lg:pr-28">
              Special prices for{" "}
              <span style={{ color: "#FFCE00" }}>meeting rooms</span> in Golf
              Course Road
            </h1>
            <p
              style={{ color: "#808080" }}
              class="mt-4 text-base xl:pr-28 xl:text-xl"
            >
              One solution for all your meeting room needs. From 4 seaters to 10
              seaters. Grab the offer now
            </p>
            <Link href="/offers">
              <div class="bg-black p-4 w-44  mt-6">
                <h1 class="text-white text-center m-0">Explore Hot Deals</h1>
              </div>
            </Link>
          </div>

          <div class="mt-10 lg:mt-0 xl:w-6/12">
            <Image class="w-full" src={banner} alt="banner" />
          </div>
        </div>

        <div class="">
          <h1 class="font-semibold text-2xl md:text-4xl">Browse By Locaton</h1>
          <p style={{ color: "#808080" }} class=" mt-2 md:mt-4 text-base">
            See all the spaces in your location at best prices.
          </p>
            </div>
            

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6 md:gap-x-10 md:gap-y-10 hover:text-gray-500    ">
          {cities.slice(0, 6).map((post) => {
            return (
              <>
                <div class="">
                  <Link
                    key={post.id}
                    as={`/category/${post.slug}`}
                    to={`/category/${post.slug}`}
                  >
                    <div class=" hover:text-gray-800 transition duration-200 bg-gray-50 rounded">
                      <Image
                        class="w-full h-24 md:h-36 lg:h-40  xl:h-52 shadow-xl transition  duration-200 rounded"
                        src={post.image.large}
                        alt={post.name}
                      />

                      <h1 class=" text-md md:text-xl font-semibold hover:text-gray-500 p-4 ">
                        {post.name}
                      </h1>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>

        {/* <Query query={CATE_QUERY} id={null}>

             {({ data: { categories } }) => {
                        return (
                            <>

                                <div class=" mt-20">
                                    <h1 class="font-semibold text-2xl md:text-4xl">Book Space Instantly</h1>
                                    <p style={{color: '#808080'}} class=" mt-2 md:mt-4 text-base">Find suitable spaces near you and book it instantly.</p>
                                </div>


                                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6 md:gap-x-10 md:gap-y-10 hover:text-gray-500">
                                    {categories.map((cat) => {
                                        return(
                                            <>
                                                <Link key={cat.id} as={`/category/${cat.id}`} href={'/category/[id]'}>
                                                    <div class=" hover:text-gray-800 transition duration-200 bg-gray-50 rounded cursor-pointer"> 
                                                        <img class="w-full h-24 md:h-36 lg:h-40  xl:h-52 shadow-xl transition  duration-200 rounded" src={ApiUrl + cat.image.url} alt={cat.name}/>
                                                        
                                                        <h1 class=" text-md md:text-xl font-semibold hover:text-gray-500 p-4 ">
                                                                {cat.name}
                                                        </h1>
                                                    </div>
                                                </Link>
                                            </>
                                        )
                                    })}

                                </div>

                                        

                                </>
                        );
                        }}





             </Query>
 */}

        {/* <Query query={CITY_QUERY} id={null}>

                {({ data: { cities } }) => {
                    return (
                        <>

                            <div class="mt-20">
                                    <h1 class="font-semibold text-2xl md:text-4xl">Browse By Location</h1>
                                    <p style={{color: '#808080'}} class=" mt-2 md:mt-4 text-base">See all the spaces in your location at best prices.</p>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-20 gap-y-10 hover:text-gray-500">
                                    {cities.map((city) => {
                                    return (
                                        <>
                                        <Link key={city.id} as={`/city/${city.slug}`} href={`/city/${city.slug}`}>
                                            <div class=" hover:text-gray-800 transition duration-200 bg-gray-50 rounded cursor-pointer"> 
                                                <img class="w-full h-52 shadow-xl transition  duration-200 rounded" src={ApiUrl + city.image.url} alt={city.name}/>
                                                
                                                <h1 class="text-xl font-semibold hover:text-gray-500 p-4 m-0">
                                                        {city.name}
                                                </h1>
                                            </div>
                                        </Link>

                                            </>
                                    );
                                    })}
                            </div>


                            <div class="bg-black text-center mt-20 md:mt-40 p-10 md:p-20">
                                <h1 class="font-semibold text-2xl md:text-4xl text-white">Didn't Find Any Suitable Space For You?</h1>
                                <p class="mt-4 text-base text-white">Don’t worry we are here to help you. Send us your requirement and we will find a space for you.</p>


                                        <button style={{backgroundColor: '#FFCE00'}} class=" m-auto p-4 w-full lg:w-4/12 xl:w-2/12 mt-10" onClick={handleWidget}>
                                                Chat With Us
                                        </button> 
                               
                                
                            </div>


                            <div class="mt-20 md:mt-40">
                                <h1 class="font-semibold text-2xl md:text-4xl">Discover Spaces We Love</h1>
                                <p style={{color: '#808080'}} class=" mt-2 md:mt-4 text-base">We love spaces. These are the some top spaces for you we love.</p>
                            </div>

                            

                            <div>
                                {cities.slice(0, 1).map((city) =>  {
                                    return(
                                        <>

                                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 mt-6">
                                            {city.resources.slice(0,6).map((c) => {
                                                return(
                                                    <>
                                                    <Link key={c.id} as={`/${c.slug}`} href={`/${c.slug}`}>
                                                                <div class="mt-6 hover:text-gray-500 border border-gray-5 hover:shadow-xl transition  duration-200 rounded">
                                                                    <img class="h-64 w-full" src={c.srcImages[0].large} alt={c.name} />

                                                                    {c.srcImages.map((i) => {
                                                                        return(
                                                                            <>
                                                                                <img class="h-64 w-full" src={i.large[0]} alt={c.name} />

                                                                            </>
                                                                        )
                                                                    })}
                                                                    <h1 class="text-xl mt-4 pl-4 font-semibold truncate">{c.name}</h1>
                                                                    
                                                                    <div class="flex items-center justify-between pl-4 mt-4">

                                                                        <div class="flex items-center">
                                                                            <Image width={20} height={20} src={pin} alt="location"/>

                                                                            <p class="text-md pl-2 m-0">
                                                                                {c.areas.map((a) => {
                                                                                    return(
                                                                                        <>
                                                                                            {a.area}
                                                                                        </>
                                                                                    )
                                                                                })}
                                                                            </p>
                                                                        </div>
                                                                        
                                                                        <div>

                                                                            <p class="text-md pr-4 m-0">
                                                                                Minimum {c.minBooking}
                                                                            </p>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div class="flex items-center justify-between pl-4 mt-4">

                                                                        <div class="flex items-center">
                                                                            <Image width={20} height={20} class="w-4" src={chair} alt="location"/>

                                                                            <p class="text-md pl-2 m-0">
                                                                                {c.seater} Seats
                                                                            </p>
                                                                        </div>
                                                                        
                                                                        <div class="flex items-center pr-4">
                                                                            <Image width={20} height={20} src={rupee} alt="location"/>

                                                                            <p class="text-lg pl-2 font-bold m-0">
                                                                                {c.hourPricing}/-
                                                                            </p>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    

                                                                    
                                                                    <Link href={`/${c.slug}`}>
                                                                        <div style={{backgroundColor: '#788794'}} class="hover:bg-black m-auto  p-4 w-11/12  mt-6 mb-6">
                                                                            <h1 class="text-white text-center m-0">Explore Now</h1>
                                                                        </div>
                                                                    </Link>

                                                                </div>
                                                            </Link>
                                                    </>
                                                )
                                            })}
                                        </div>
                                        

                                        </>
                                    )
                                })}
                            </div>

                        </>
                    );
                }}
            </Query> */}

        <div class="bg-black mt-20 md:flex">
          <div class="p-4 md:p-10 lg:pt-40 xl:pt-52 pt-16  md:w-6/12">
            <h1 class="font-semibold text-2xl md:text-4xl text-white">
              Want to book space on the go?
            </h1>
            <p class="mt-4 text-base text-white">
              Download our mobile app to book any space on the go with the best
              prices.
            </p>
            <div class="mt-10 flex">
              <a
                href="https://play.google.com/store/apps/details?id=com.flexispaces&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={android} alt="mobile app" />
              </a>
              <a
                href="https://apps.apple.com/az/app/flexispaces/id1493178889"
                target="_blank"
                rel="noreferrer"
              >
                <Image class="ml-2 md:ml-8" src={ios} alt="mobile app" />
              </a>
            </div>
          </div>

          <div class="md:w-6/12">
            <Image src={app} alt="mobile app" />
          </div>
        </div>

        <div
          style={{ backgroundColor: "#f9f9f9" }}
          class="md:px-10 md:py-20 p-10 mt-20"
        >
          <div class="text-center">
            <h1 class="font-semibold text-2xl md:text-4xl">
              How FlexiSpaces Works
            </h1>
          </div>

          <div class=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-10 md:mt-20">
            <div class="text-center">
              <Image
                width={30}
                height={30}
                class="m-auto"
                src={search}
                alt="search"
              />
              <h1 class="text-xl mt-4">Search Space</h1>
              <p class="mt-2 text-base md:text-lg text-gray-500">
                Start by searching for what you want and let FlexiSpaces help
                you to find the best fit.
              </p>
            </div>
            <div class="text-center">
              <Image
                width={30}
                height={30}
                class="m-auto"
                src={shop}
                alt="search"
              />
              <h1 class="text-xl mt-4">Reserve Space</h1>
              <p class="mt-2 text-base md:text-lg text-gray-500">
                Start by searching for what you want and let FlexiSpaces help
                you to find the best fit.
              </p>
            </div>
            <div class="text-center">
              <Image
                width={30}
                height={30}
                class="m-auto"
                src={user}
                alt="search"
              />
              <h1 class="text-xl mt-4">Host Approval</h1>
              <p class="mt-2 text-base md:text-lg text-gray-500">
                Start by searching for what you want and let FlexiSpaces help
                you to find the best fit.
              </p>
            </div>
            <div class="text-center">
              <Image
                width={30}
                height={30}
                class="m-auto"
                src={house}
                alt="search"
              />
              <h1 class="text-xl mt-4">It's Yours</h1>
              <p class="mt-2 text-base md:text-lg text-gray-500">
                Start by searching for what you want and let FlexiSpaces help
                you to find the best fit.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-20">
          <div class="text-center">
            <h1 class="font-semibold text-4xl">As Seen In</h1>
            <p style={{ color: "#808080" }} class="mt-4 text-base">
              We're being covered by famous media publications
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20 m-auto justify-center mt-10 p-8">
              <Image width={60} height={60} src={partner1} alt="media-logo" />
              <Image width={60} height={60} src={partner2} alt="media-logo" />
              <Image width={60} height={60} src={partner3} alt="media-logo" />
              <Image width={60} height={60} src={partner4} alt="media-logo" />
              <Image width={60} height={60} src={partner5} alt="media-logo" />
            </div>
          </div>
        </div>

        <hr class="border-1 border-gray-200 my-20"></hr>

        <div class="bg-black text-center mt-20 p-10 md:p-20">
          <h1 class="font-semibold text-2xl md:text-4xl text-white">
            Got Space? Earn With FlexiSpaces
          </h1>
          <p class="mt-4 text-base text-white">
            Listing on FlexiSpaces can bring higher returns from your space in
            just no time.
          </p>

          <button
            style={{ backgroundColor: "#FFCE00" }}
            class=" m-auto p-4 w-full lg:w-4/12 xl:w-2/12 mt-10"
            onClick={handleWidget}
          >
            Chat With Us
          </button>
        </div>
      </div>
    );
}

