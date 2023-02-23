import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  data =[
    {
     title:" Docs",
     description:"Find in-depth information about Next.js features and&nbsp;API.",
     link:"www.google.com",
    },
    {
      title:" Docs",
      description:"Find in-depth information about Next.js features and&nbsp;API.",
      link:"www.google.com",
     },
     {
      title:" Docs",
      description:"Find in-depth information about Next.js features and&nbsp;API.",
      link:"www.google.com",
     },
     {
      title:" Docs",
      description:"Find in-depth information about Next.js features and&nbsp;API.",
      link:"www.google.com",
     },
     
    
  ]
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='opacity-30 w-[100%] fixed md:opacity-20   '>
      <svg className='' width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="7%" y1="25%" x2="93%" y2="75%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#9900ef"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,120 0,120 C 31.315514622936384,124.05252266266136 62.63102924587277,128.10504532532272 89,138 C 115.36897075412723,147.89495467467728 136.79139763944536,163.6323413613704 168,152 C 199.20860236055464,140.3676586386296 240.2033801963458,101.36558922919558 272,88 C 303.7966198036542,74.63441077080442 326.3950815751714,86.90530172184725 352,90 C 377.6049184248286,93.09469827815275 406.2162935029686,87.01320388341536 435,88 C 463.7837064970314,88.98679611658464 492.739744412954,97.0418827444913 530,108 C 567.260255587046,118.9581172555087 612.8247288452152,132.81926513861941 641,128 C 669.1752711547848,123.18073486138057 679.9613402061855,99.68105670103093 710,84 C 740.0386597938145,68.31894329896907 789.3299103300426,60.45650805725684 825,84 C 860.6700896699574,107.54349194274316 882.7190184736438,162.4929110699417 904,161 C 925.2809815263562,159.5070889300583 945.794015775382,101.5718476629764 980,87 C 1014.205984224618,72.4281523370236 1062.1049184248288,101.21969827815273 1095,104 C 1127.8950815751712,106.78030172184727 1145.7863105253036,83.54935922441267 1169,92 C 1192.2136894746964,100.45064077558733 1220.7498394739569,140.58286482419658 1253,152 C 1285.2501605260431,163.41713517580342 1321.2143315788694,146.11918147880095 1353,136 C 1384.7856684211306,125.88081852119903 1412.3928342105653,122.94040926059952 1440,120 C 1440,120 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="7%" y1="25%" x2="93%" y2="75%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#9900ef"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,240 0,240 C 37.53605389202083,242.44483625932682 75.07210778404166,244.88967251865364 105,247 C 134.92789221595834,249.11032748134636 157.24762275585414,250.88614618471235 184,237 C 210.75237724414586,223.11385381528765 241.9374011925417,193.565742742497 275,204 C 308.0625988074583,214.434257257503 343.0027724739788,264.8508828452995 376,279 C 408.9972275260212,293.1491171547005 440.05150891154335,271.03072587630504 463,254 C 485.94849108845665,236.96927412369496 500.7911918798476,225.02621364948016 528,219 C 555.2088081201524,212.97378635051984 594.7837235690661,212.86441952577434 627,217 C 659.2162764309339,221.13558047422566 684.073913843888,229.51610824742266 713,227 C 741.926086156112,224.48389175257734 774.9206210553817,211.07114748453495 810,219 C 845.0793789446183,226.92885251546505 882.2436019345852,256.1993018144374 908,263 C 933.7563980654148,269.8006981855626 948.1049712062771,254.13164525771552 973,236 C 997.8950287937229,217.86835474228448 1033.336513240307,197.27411715470055 1074,197 C 1114.663486759693,196.72588284529945 1160.5489758324952,216.77188612348235 1186,220 C 1211.4510241675048,223.22811387651765 1216.4675834297127,209.63833835137012 1246,206 C 1275.5324165702873,202.36166164862988 1329.5806904486535,208.67476047103713 1366,216 C 1402.4193095513465,223.32523952896287 1421.2096547756732,231.66261976448143 1440,240 C 1440,240 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="7%" y1="25%" x2="93%" y2="75%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#9900ef"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,360 0,360 C 35.88909616382672,342.8674535149529 71.77819232765344,325.73490702990586 100,323 C 128.22180767234656,320.26509297009414 148.77632685321294,331.92782539532965 174,349 C 199.22367314678706,366.07217460467035 229.1165002594949,388.55379138877566 262,383 C 294.8834997405051,377.44620861122434 330.75767210880736,343.85700904956764 357,341 C 383.24232789119264,338.14299095043236 399.8528113052756,366.0181724129538 433,364 C 466.1471886947244,361.9818275870462 515.8310826700905,330.0703012986173 552,334 C 588.1689173299095,337.9296987013827 610.8228580143625,377.70062239257686 632,392 C 653.1771419856375,406.29937760742314 672.8774852724595,395.1272091310751 708,386 C 743.1225147275405,376.8727908689249 793.6672008957995,369.7905410831227 823,372 C 852.3327991042005,374.2094589168773 860.4537111443425,385.7106265364342 886,387 C 911.5462888556575,388.2893734635658 954.5179545268306,379.3669527711405 991,378 C 1027.4820454731694,376.6330472288595 1057.4744707483353,382.8215623790038 1089,366 C 1120.5255292516647,349.1784376209962 1153.5841624798275,309.3467977128444 1179,319 C 1204.4158375201725,328.6532022871556 1222.1888793323542,387.7912467696188 1254,400 C 1285.8111206676458,412.2087532303812 1331.660320190756,377.48821520868034 1365,363 C 1398.339679809244,348.51178479131966 1419.169839904622,354.2558923956598 1440,360 C 1440,360 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="7%" y1="25%" x2="93%" y2="75%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#9900ef"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,480 0,480 C 33.9492183424602,501.08777106282093 67.8984366849204,522.1755421256419 96,512 C 124.1015633150796,501.8244578743581 146.35547160277858,460.3856025602534 171,440 C 195.64452839722142,419.6143974397466 222.6796769039653,420.2820476333444 256,435 C 289.3203230960347,449.7179523666556 328.9258207813603,478.48620690636886 358,486 C 387.0741792186397,493.51379309363114 405.6170399705935,479.77312474118014 440,480 C 474.3829600294065,480.22687525881986 524.606019336266,494.42129412891063 553,508 C 581.393980663734,521.5787058710894 587.9588826843429,534.5416987431773 617,515 C 646.0411173156571,495.45830125682266 697.5584499263622,443.41191089838003 735,443 C 772.4415500736378,442.58808910161997 795.8073176102079,493.8106576633028 817,508 C 838.1926823897921,522.1893423366972 857.2122796328063,499.3454584484089 886,492 C 914.7877203671937,484.6545415515911 953.3435638585672,492.80750854306143 989,485 C 1024.6564361414328,477.19249145693857 1057.4134649329253,453.42450737934536 1083,449 C 1108.5865350670747,444.57549262065464 1127.0025764097313,459.4944619395569 1156,457 C 1184.9974235902687,454.5055380604431 1224.5762294281492,434.597644862427 1262,446 C 1299.4237705718508,457.402355137573 1334.6925058776717,500.11495861073513 1364,511 C 1393.3074941223283,521.8850413892649 1416.6537470611643,500.94252069463244 1440,480 C 1440,480 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 300)"></path></svg>
      </div>




      <section className="relative">

{/* Illustration behind hero content */}
<div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
  <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#EAEAEA" offset="77.402%" />
        <stop stopColor="#DFDFDF" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="url(#illustration-01)" fillRule="evenodd">
      <circle cx="1232" cy="128" r="128" />
      <circle cx="155" cy="443" r="64" />
    </g>
  </svg>
</div>

<div className="max-w-6xl mx-auto px-4 sm:px-6">

  {/* Hero content */}
  <div className="pt-32 pb-12 md:pt-40 md:pb-20">

    {/* Section header */}
    <div className="text-center pb-12 md:pb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
          <div>
            <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
          </div>
          <div>
            <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
          </div>
        </div>
      </div>
    </div>

    {/* Hero image */}
    <div>
      <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
        <div className="flex flex-col justify-center">
          <img className="mx-auto" width="768" height="432" alt="Hero" />
          <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="48.57%" />
                <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
              </linearGradient>
              <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                <stop stopColor="#4FD1C5" offset="0%" />
                <stop stopColor="#81E6D9" offset="25.871%" />
                <stop stopColor="#338CF5" offset="100%" />
              </radialGradient>
              <circle id="hero-ill-d" cx="384" cy="216" r="64" />
            </defs>
            <g fill="none" fillRule="evenodd">
              <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
              <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
              <g fillRule="nonzero">
                <use fill="#000" xlinkHref="#hero-ill-d" />
                <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
              </g>
            </g>
          </svg>
        </div>
        <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
          <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
            <path d="M10 17l6-5-6-5z" />
          </svg>
          <span className="ml-3">Watch the full video (2 min)</span>
        </button>
      </div>

     

    </div>

  </div>

</div>
</section>






















      <main className={styles.main}>
        
        <div className={styles.description}>
          <p className='font-bold text-md'>
           Kunal.Dev
           
          </p>
          <div>
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className='font-bold '
            >
            Made with Love
            
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <p className=' font-bold'>KUNAL</p>
         
        </div>

        <div className={styles.grid}>
        {
          data.map((d)=>(
            <a
            href={d.link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {d.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {d.description}&nbsp;API.
            </p>
          </a>
          ))
        }

        
         
        </div>
      </main>
    </>
  )
}
