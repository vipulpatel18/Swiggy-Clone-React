import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";


export default function Footer() {
  const [show, setShow] = useState(false);
  const cities = [
    "Kolkata",
    "Chennai",
    "Ahmedabad",
    "Chandigarh",
    "Jaipur",
    "Kochi",
    "Coimbatore",
    "Lucknow",
    "Nagpur",
    "Vadodara",
    "Indore",
    "Guwahati",
    "Vizag",
    "Surat",
    "Dehradun",
    "Noida",
    "Ludhiana",
    "Trichy",
    "Vijayawada",
    "Kanpur",
    "Mysore",
    "Nashik",
    "Udaipur",
    "Pondicherry",
    "Agra",
    "Aurangabad",
    "Jalandhar",
    "Kota",
    "Madurai",
    "Allahabad",
    "Manipal",
    "Amritsar",
    "Bareilly",
    "Meerut",
    "Bhopal",
    "Ooty",
    "Bhubaneswar",
    "Raipur",
    "Bikaner",
    "Rajkot",
    "Kozhikode",
    "Central Goa",
    "Sirsa",
    "Gwalior",
    "Thrissur",
    "Kharagpur",
    "Tirupati",
    "Tirupur",
    "Vellore",
    "Thiruvananthapuram",
    "Warangal",
    "Varanasi",
    "Mangaluru",
    "Patna",
    "Ranchi",
    "Faridabad",
    "Guntur",
    "Ujjain",
    "Patiala",
    "Karnal",
    "Kakinada",
    "Rajahmundry",
    "Bilaspur",
    "Bhilai",
    "Anand",
    "Bhavnagar",
    "Jammu",
    "Muktsar",
    "Panipat",
    "Dhanbad",
    "Hubli",
    "Belgaum",
    "Jabalpur",
    "Kolhapur",
    "Solapur",
    "Shillong",
    "Cuttack",
    "Aligarh",
    "Salem",
    "Jodhpur",
    "Ajmer",
    "Jhansi",
    "Gorakhpur",
    "Thanjavur",
    "Erode",
    "Nellore",
    "Rourkela",
    "Anantapur",
    "Kurnool",
    "Ahmednagar",
    "Phagwara",
    "Ambala",
    "Ballari",
    "Saharanpur",
    "Tirunelveli",
    "Bathinda",
    "Mathura",
    "Haridwar",
    "Ratnagiri",
    "Sangli",
    "Amravati",
    "Rishikesh",
    "Nagercoil",
    "KanyaKumari",
    "Kadapa",
    "Nizamabad",
    "Shivamogga",
    "Davanagere",
    "Roorkee",
    "Nanded",
    "Rewa",
    "Satna",
    "Muzaffarpur",
    "Valsad",
    "Vapi",
    "Chhapra",
    "Dharamshala",
    "Kollam",
    "Silchar",
    "Alappuzha",
    "Sonipat",
    "Rohtak",
    "Mehsana",
    "Kullu",
    "Dhule",
    "Dharwad",
    "Latur",
    "Vizianagaram",
    "Khammam",
    "Hampi",
    "Nainital",
    "Akola",
    "Kalaburagi",
    "Gaya",
    "Muzaffarnagar",
    "Dewas",
    "Korba",
    "Mussoorie",
    "Jalgaon",
    "Yamuna Nagar",
    "Bhagalpur",
    "Hapur",
    "Morena",
    "Hassan",
    "Hisar",
    "Godhra",
    "Kolar",
    "Rampur Sitapur",
    "Etawah",
    "Porbandar",
    "Nadiad",
    "Sagar",
    "Morbi",
    "Chhindwara",
    "Tumakuru",
    "Singrauli",
    "Thoothukudi",
    "Katni",
    "Khandwa",
    "Eluru",
    "Malappuram",
    "Dibrugarh",
    "Deoghar",
    "Khanna",
    "Bidar",
    "Madikeri",
    "Haldwani",
    "Farrukhabad",
    "Malegaon",
    "Dindigul",
    "Shahjahanpur",
    "Beed",
    "Junagadh",
    "Asansol",
    "Beawar",
    "Kishangarh",
    "Parbhani",
    "Gondia",
    "Ichalkaranji",
    "Jalna",
    "Yavatmal",
    "Shivpuri",
    "Moga",
    "Abohar",
    "Adoni",
    "Madanapalle",
    "Tiruvannamalai",
    "Satara",
    "Ambur",
    "Karimnagar",
    "Ratlam",
    "Moradabad",
    "Machilipatnam",
    "Ongole",
    "Kottayam",
    "Darbhanga",
    "Kurukshetra",
    "Unnao",
    "Bulandshahr",
    "Durgapur",
    "Siliguri",
    "Pali",
    "Tadepalligudem",
    "Ramagundam",
    "Mahbubnagar",
    "Bhiwani",
    "Cuddalore",
    "Kaithal",
    "Jagtial",
    "Palakkad",
    "Guna",
    "Kumbakonam",
    "Maunath Bhanjan",
    "Baripada",
    "Orai",
    "Bhadrak",
    "Batala",
    "Firozpur",
    "Barnala",
    "Raigarh",
    "Nagaon",
    "Mainpuri",
    "Balurghat",
    "Giridih",
    "Ghazipur",
    "Jagdalpur",
    "Vidisha",
    "Dimapur",
    "Shikohabad",
    "Imphal",
    "Lakhimpur",
    "Rudrapur",
    "Ambikapur",
    "Rae Bareli",
    "Tinsukia",
    "Rajapalayam",
    "Rajnandgaon",
    "Kashipur",
    "Ranibennur",
    "Burhanpur",
    "Bhadravati",
    "Chittoor",
    "Pudukkottai",
    "Hardoi",
    "Basti",
    "Karaikkudi",
    "Lalitpur",
    "Hospet",
    "Budaun",
    "Neemuch",
    "Pilibhit",
    "Barshi",
    "Sri Ganganagar",
    "Wardha",
    "Sehore",
    "Bhimavaram",
    "Hanumangarh",
    "Pathankot",
    "Puri",
    "Fatehpur",
    "Surendranagar Dudhrej",
    "Jamnagar",
    "Bhuj",
    "Gandhidham",
    "Bharuch",
    "Navsari",
    "Amreli",
    "Palanpur",
    "Bhilwara",
    "Suratgarh",
    "Sikar",
    "Churu",
    "Alwar",
    "Bhiwadi",
    "Bharatpur",
    "Mount Abu",
    "Bundi",
    "Sawai Madhopur",
    "Purulia",
    "Bardhaman",
    "Raniganj",
    "Darjeeling",
    "Jalpaiguri",
    "Chittorgarh",
    "Dholpur",
    "Uluberia",
    "Nabadwip",
    "Bongaon",
    "Kanchrapara",
    "Habra",
    "Firozabad",
    "Nalgonda",
    "Chandrapur",
    "Bijapur",
    "Bhusawal Raichur",
    "Bahraich",
    "Azamgarh",
    "Bahadurgarh",
    "Jind",
    "Rewari",
    "Palwal",
    "Hathras",
    "Sambalpur",
    "Banda",
    "Hoshiarpur",
    "Faridkot",
    "Mandsaur",
    "Suryapet",
    "Adilabad",
    "Narasaraopet",
    "Faizabad",
    "Tadpatri",
    "Gonda",
    "Mughalsarai",
    "Medinipur",
    "Nagda",
    "Raiganj",
    "Deoria City",
    "Sultanpur",
    "Shamli",
    "Krishnanagar",
    "Ballia",
    "Guntakal",
    "Miryalaguda",
    "Etah",
    "Berhampore",
    "Gudivada",
    "Haldia",
    "Santipur",
    "Basirhat",
    "Udgir",
    "Proddatur",
    "Nagapattinam",
    "Chikmagalur",
    "Chandausi",
    "Bhind",
    "Mandya",
    "Bagalkot",
    "Nandurbar",
    "Chitradurga",
    "Osmanabad",
    "Modinagar",
    "Gadag-Betigeri",
    "Hoshangabad",
    "Jaunpur",
    "Port Blair",
    "Jorhat",
    "Nandyal",
    "Biharsharif",
    "Buxar",
    "Siwan",
    "Dehri",
    "Bettiah",
    "Kishanganj",
    "Saharsa",
    "Hajipur",
    "Motihari",
    "Sasaram",
    "Munger",
    "Katihar",
    "Arrah",
    "Srikakulam",
    "Begusarai",
    "Neyveli",
    "Waidhan",
    "Markapur",
    "Chikkaballapur",
    "Bhatkal",
    "Gokak",
    "Itarsi",
    "Dhar",
    "Chalisgaon",
    "Thiruvallur",
    "Namakkal",
    "Dharmapuri",
    "Bhandara",
    "Virudhunagar",
    "Siddipet",
    "Gadwal",
    "Bodhan-Rural",
    "Kamareddy",
    "Jhunjhunu",
    "Kapurthala",
    "Sangrur",
    "Gurdaspur",
    "Ramgarh",
    "Bantwal",
    "Doddaballapura",
    "Buldana",
    "Karad",
    "Krishnagiri",
    "Tiptur",
    "Bhadrachalam",
    "Mancherial",
    "Balrampur",
    "Bharabanki",
    "Malout",
    "Fatehgarh Sahib",
    "Ropar",
    "Nangal",
    "Narnaul",
    "Naraingarh",
    "Himmatnagar",
    "Dausa",
    "Jahanabad",
    "Samastipur",
    "Purnea",
    "Berhampur",
    "Malda",
    "Tuni",
    "Puttur",
    "Rayachoty",
    "Nirmal",
    "Mirzapur",
    "Tanuku",
    "Dahod",
    "Barmer",
    "Gangapur City",
    "Mandi Gobindgarh",
    "Tarn Taran Sahib",
    "Nakodar",
    "Ankleshwar",
    "Vyara",
    "Bardoli",
    "Halol",
    "Bijnor",
    "Sangamner",
    "Baramati",
    "Betul",
    "Chhatarpur",
    "Balaghat",
    "Sivakasi",
    "Viluppuram",
    "Ramanathapuram",
    "Sirsi",
    "Theni",
    "Karur",
    "Karwar",
    "Sindhanur",
    "Kannur",
    "Noida 1",
    "Thiruvalla",
    "Thodupuzha",
    "Kadiri",
    "Kavali",
    "Tezpur",
    "Kayamkulam",
    "Kottarakkara",
    "Mandi Dabwali",
    "Fatehabad",
    "Jagraon",
    "Mansa",
    "Pinjore City",
    "Fazilka",
    "Baddi",
    "Solan",
    "Daltonganj",
    "Balangir",
    "Kothagudem",
    "Hansi",
    "Aurangabad_Bihar",
    "Gopalganj",
    "Jharsuguda",
    "Tohana",
    "Jhalawar",
    "Sivasagar",
    "Bagdogra",
    "Kendrapada",
    "Mallapuram (Do not Use)",
    "Veraval",
    "Daman",
    "Chiplun",
    "Silvassa",
    "Lonavla",
    "Bongaigaon",
    "Golaghat",
    "Duliajan",
    "Bolpur",
    "Madhubani",
    "Balasore",
    "Palampur",
    "Kotdwar",
    "Koppal",
    "Chikhli",
    "Dahanu",
    "Itanagar",
    "Rangpo",
    "Aizawl",
    "Gangtok",
    "Mayiladuthurai",
    "Kannauj",
    "Cooch Behar",
    "Palani",
    "Bilimora",
    "Boisar",
    "Kohima",
    "Naharlagun",
    "Dumka",
    "Rajsamand",
    "Gauriganj",
    "Bodinayakanur",
    "Bhawanipatna",
    "Baran",
    "Narsinghpur",
    "Kovilpatti",
    "Pusad",
    "Kendujhar",
    "Manali",
    "Diu",
    "Khamgaon",
    "Ramanagara",
    "Alipurduar",
    "Almora",
    "Jhargram",
    "Arambagh",
    "Bhadohi",
    "Tenkasi",
    "Srivilliputhur",
    "Chidambaram",
    "Rajgarh",
    "Pratapgarh",
    "Washim",
    "Raghunathpur",
    "Suri",
    "Kadayanallur",
    "Thiruvarur",
    "Ranaghat-WB",
    "Wayanad",
    "Perambalur",
    "Paramakudi",
    "Bela Pratapgarh",
    "Mahoba",
    "Sitamarhi",
    "Chakdaha",
    "Khalilabad",
    "Pattukkottai",
    "Tindivanam",
    "Tiruttani",
    "Gangarampur",
    "Dharapuram",
    "Arakkonam",
    "Sirkali",
    "Mettupalayam",
    "Digboi",
    "Biswanath Chariali",
    "Nalbari",
    "Shirdi city",
    "Mukerian",
    "Hosur",
    "Palakollu",
    "Ravulapalem",
    "Barh",
    "Palghar",
    "Kushalnagar",
    "Dungarpur",
    "Chaibasa",
    "Haveri",
    "Karaikal",
    "Jjajjar",
    "Kokrajhar",
    "Rangia",
    "Hamirpur",
    "Una",
    "Sulthan Bathery",
    "Rayagada",
    "Paradeep",
    "Mandapeta",
    "Jamui",
    "Pilkhuwa",
    "Parvathipuram",
    "Ambajogai",
    "Araria",
    "North Lakhimpur",
    "Rajampet",
    "Udumalaipettai",
    "Tirupattur",
    "Hojai",
    "Khagaria",
    "Dasuya",
    "Gudur",
    "Sullurpeta",
    "Piler",
    "SankaranKoil",
    "Nabha",
    "LPU - Phagwara",
    "Jangipur",
    "Roha",
  ];

  return (
    <>
      <div className="bg-gray-100 py-4 flex flex-col md:flex-row justify-center items-center space-x-4 overflow-hidden">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <p className="text-xl md:text-2xl font-bold text-gray-800 text-center md:text-right md:pe-10">
            For better experience, download <br className="hidden md:block" />{" "}
            the Swiggy app now
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 w-full md:w-1/2 justify-center md:justify-start">
          <img
            src="img/play_store.avif"
            alt="Download on Google Play"
            className="w-32 md:w-40"
          />
          <img
            src="img/app_store.avif"
            alt="Download on App Store"
            className="w-32 md:w-40"
          />
        </div>
      </div>
      <footer className="bg-gray-100 text-white py-8 overflow-hidden ps-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-[#ff5200] p-3 rounded-xl">
                  <img
                    src="img/swiggy-1.svg"
                    alt="Swiggy Logo"
                    className="w-6 grayscale"
                  />
                </div>
                <h1 className="font-extrabold text-2xl text-[#ff5200]">
                  Swiggy
                </h1>
              </div>
              <p className="text-gray-500">© 2024 Swiggy Limited</p>
            </div>

            <div>
              <h4 className=" mb-2 text-black font-bold">Company</h4>
              <ul className="space-y-2">
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  About
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Careers
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Team
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Swiggy One
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Swiggy Instamart
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Swiggy Genie
                </li>
              </ul>
            </div>

            <div>
              <div>
                <h4 className=" mb-2 text-black font-bold">Contact us</h4>
                <ul className="space-y-2">
                  <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                    Help & Support
                  </li>
                  <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                    Partner with us
                  </li>
                  <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                    Ride with us
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mt-4 mb-2 font-bold text-black">Legal</h4>
                <ul className="space-y-2">
                  <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                    Terms & Conditions
                  </li>
                  <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                    Cookie Policy
                  </li>
                  <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                    Investor Relations
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className=" mb-2 text-black font-bold">We deliver to:</h4>
              <ul className="space-y-2">
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Bangalore
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Gurgaon
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Hyderabad
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Delhi
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Mumbai
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Pune
                </li>
              </ul>
              {!show ? (
                <button
                  className="mt-4 text-white flex items-center gap-2 bg-gray-600 px-4 py-2 rounded"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  589 cities
                  <FaAngleDown />
                </button>
              ) : (
                <button
                  className="mt-4 text-white flex items-center gap-2 bg-gray-600 px-4 py-2 rounded"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  589 cities
                  <FaAngleUp />
                </button>
              )}
            </div>

            <div>
              <h4 className=" mb-2 text-black font-bold">Life at Swiggy</h4>
              <ul className="space-y-2">
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Explore with Swiggy
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Swiggy News
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                  Snackables
                </li>
              </ul>

              <h4 className=" mb-2 text-black font-bold mt-6">Social Links</h4>
              <ul className="space-y-2 flex gap-2 items-baseline text-xl">
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                <FaLinkedin />
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                <FaInstagram />
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                <FaFacebookF />
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                <TbBrandPicsart />
                </li>
                <li className="text-[#02060c99] font-semibold hover:text-black cursor-pointer">
                <FaTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {show ? (
          <div className="mt-24">
            <div className="border-b border-gray-600" />
            <div className="container mx-auto px-4 max-w-6xl mt-8">
              <h4 className=" mb-2 text-black font-bold">
                Other cities that we deliver:
              </h4>
              <ul className="space-y-2 w-fit flex flex-wrap">
                {cities.map((d, i) => {
                  return (
                    <li
                      key={i}
                      className="text-[#02060c99] text-[12px] break-words sm:text-[18px] font-semibold hover:text-black w-1/4 cursor-pointer shrink-0"
                    >
                      {d}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          " "
        )}
      </footer>
    </>
  );
}
