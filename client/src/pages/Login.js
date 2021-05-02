import React from "react";
import LoginForm from "../components/LoginForm";
import Container from "../components/Container";
import Row from "../components/Row";
import Footer from "../components/Footer";
import "./styles/Login.css";

const Login = () => {
  return (
    <div>
      <Container className="login">
        <Row className="login-title-svg">
          <div className="login-title">
            <h3>Welcome Back!</h3>
          </div>
          <div className="login-svg">
            <svg
              id="adb94446-5251-4268-838a-0133635768e6"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="858.75602"
              height="581.93444"
              viewBox="0 0 858.75602 581.93444"
            >
              <path
                d="M982.60337,738.67494a198.58515,198.58515,0,0,1,16.43551-62.6751q3.70938-8.28648,8.16548-16.20812a1.21031,1.21031,0,0,0-2.08857-1.22081,201.33032,201.33032,0,0,0-22.40292,61.8047q-1.682,9.08553-2.52831,18.29933c-.14337,1.54932,2.27633,1.53955,2.41881,0Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#f2f2f2"
              />
              <circle cx="842.44078" cy="489.31908" r="15.31908" fill="#f2f2f2" />
              <path
                d="M984.1704,739.08181a128.83181,128.83181,0,0,1,10.66249-40.66026q2.40643-5.37582,5.29732-10.515a.78518.78518,0,0,0-1.355-.792,130.61268,130.61268,0,0,0-14.53382,40.09559q-1.09118,5.8942-1.64023,11.87163c-.093,1.00512,1.47676.99878,1.56919,0Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#f2f2f2"
              />
              <circle cx="833.30885" cy="521.45224" r="9.9382" fill="#f2f2f2" />
              <path
                d="M982.18985,738.14366a128.83151,128.83151,0,0,1-16.60132-38.61789q-1.409-5.71884-2.29049-11.549a.78518.78518,0,0,0-1.55548.2089,130.61245,130.61245,0,0,0,13.20154,40.55376q2.76492,5.31861,6.00847,10.36939c.54487.84972,1.77871-.12078,1.23728-.96515Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#f2f2f2"
              />
              <circle cx="791.10806" cy="520.7546" r="9.9382" fill="#f2f2f2" />
              <path
                d="M341.04917,738.67494a198.58543,198.58543,0,0,0-16.43552-62.6751q-3.70938-8.28648-8.16547-16.20812a1.2103,1.2103,0,0,1,2.08856-1.22081,201.33032,201.33032,0,0,1,22.40292,61.8047q1.682,9.08553,2.52831,18.29933c.14338,1.54932-2.27633,1.53955-2.4188,0Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#f2f2f2"
              />
              <circle cx="139.96777" cy="489.31908" r="15.31908" fill="#f2f2f2" />
              <path
                d="M339.48213,739.08181a128.83154,128.83154,0,0,0-10.66249-40.66026q-2.40643-5.37582-5.29732-10.515a.78518.78518,0,0,1,1.355-.792,130.61243,130.61243,0,0,1,14.53382,40.09559q1.09117,5.8942,1.64023,11.87163c.093,1.00512-1.47676.99878-1.56919,0Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#f2f2f2"
              />
              <circle cx="149.0997" cy="521.45224" r="9.9382" fill="#f2f2f2" />
              <path
                d="M341.46268,738.14366A128.83126,128.83126,0,0,0,358.064,699.52577q1.409-5.71884,2.2905-11.549a.78518.78518,0,0,1,1.55548.2089,130.61247,130.61247,0,0,1-13.20155,40.55376Q345.94351,734.058,342.7,739.10881c-.54487.84972-1.77871-.12078-1.23728-.96515Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#f2f2f2"
              />
              <circle cx="191.3005" cy="520.7546" r="9.9382" fill="#f2f2f2" />
              <path
                d="M925.025,538.4116l.2391,180.1142a12.62623,12.62623,0,0,1-12.59331,12.63042l-74.81731.10967c21.0619-39.39981,32.98714-101.4149,32.91706-149.21752a281.27111,281.27111,0,0,0-5.721-56.16081l47.34517-.0694A12.62623,12.62623,0,0,1,925.025,538.4116Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#007bff"
              />
              <path
                d="M1028.18733,740.96722h-738.294a1.19069,1.19069,0,0,1,0-2.38137h738.294a1.19068,1.19068,0,0,1,0,2.38137Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <path
                d="M815.38755,513.794l-133.33838-.52295,12.96582-43.1372a16.59941,16.59941,0,0,1,15.80371-11.75049h.06274l76.10571.29883a16.59722,16.59722,0,0,1,15.77369,11.875Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <path
                d="M889.82627,499.03278a14,14,0,0,0-14,14h28A14,14,0,0,0,889.82627,499.03278Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#007bff"
              />
              <path
                d="M932.82627,740.03278h-368a17.01916,17.01916,0,0,1-17-17v-194a17.01917,17.01917,0,0,1,17-17h368a17.01917,17.01917,0,0,1,17,17v194A17.01916,17.01916,0,0,1,932.82627,740.03278Zm-368-226a15.017,15.017,0,0,0-15,15v194a15.017,15.017,0,0,0,15,15h368a15.017,15.017,0,0,0,15-15v-194a15.017,15.017,0,0,0-15-15Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <path
                d="M764.82627,497.53278h-32a8.5,8.5,0,0,1,0-17h32a8.5,8.5,0,0,1,0,17Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#fff"
              />
              <path
                d="M748.82627,702.03278a76,76,0,1,1,76-76A76.086,76.086,0,0,1,748.82627,702.03278Zm0-150a74,74,0,1,0,74,74A74.08385,74.08385,0,0,0,748.82627,552.03278Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <path
                d="M748.82627,676.03278a50,50,0,1,1,50-50A50.0565,50.0565,0,0,1,748.82627,676.03278Zm0-98a48,48,0,1,0,48,48A48.05437,48.05437,0,0,0,748.82627,578.03278Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <circle cx="578.20428" cy="467" r="38" fill="#ccc" />
              <path
                d="M725.82627,626.03278a25.001,25.001,0,0,1,21.5-24.751,25,25,0,1,0,0,49.502A25.001,25.001,0,0,1,725.82627,626.03278Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#fff"
              />
              <path
                d="M914.82627,514.03278h-50v-1a25,25,0,0,1,50,0Zm-47.97852-2h45.957a23.00028,23.00028,0,0,0-45.957,0Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <path
                d="M572.82627,542.03278a10,10,0,1,1,10-10A10.0113,10.0113,0,0,1,572.82627,542.03278Zm0-18a8,8,0,1,0,8,8A8.00916,8.00916,0,0,0,572.82627,524.03278Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <circle cx="402.20428" cy="373" r="5" fill="#007bff" />
              <circle cx="428.20428" cy="373" r="5" fill="#ccc" />
              <circle cx="454.20428" cy="373" r="5" fill="#ccc" />
              <path
                d="M598.82627,542.03278a10,10,0,1,1,10-10A10.0113,10.0113,0,0,1,598.82627,542.03278Zm0-18a8,8,0,1,0,8,8A8.00916,8.00916,0,0,0,598.82627,524.03278Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <path
                d="M624.82627,542.03278a10,10,0,1,1,10-10A10.0113,10.0113,0,0,1,624.82627,542.03278Zm0-18a8,8,0,1,0,8,8A8.00916,8.00916,0,0,0,624.82627,524.03278Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <rect x="378.20428" y="439.87402" width="130" height="2" fill="#3f3d56" />
              <rect
                x="378.20428"
                y="480.12598"
                width="126.77148"
                height="2"
                fill="#3f3d56"
              />
              <rect x="648.20428" y="439.87402" width="130" height="2" fill="#3f3d56" />
              <rect
                x="651.20428"
                y="480.12598"
                width="126.77148"
                height="2"
                fill="#3f3d56"
              />
              <path
                d="M443.44815,401.50927c-8.10948-3.7255-13.44022-14.37685-13.13661-24.88137s5.83147-20.32877,13.4557-25.33817a26.6494,26.6494,0,0,1,25.21942-1.90564c8.18253,3.483,19.16872,4.43181,24.08706,13.089,3.77959,6.6528,2.41807,21.49465-.25792,28.89228-2.31293,6.394-7.96837,9.99663-13.48333,12.0127a45.34013,45.34013,0,0,1-37.51095-3.0216"
                transform="translate(-170.62199 -159.03278)"
                fill="#2f2e41"
              />
              <polygon
                points="223.381 568.707 211.722 564.914 220.803 518.141 238.01 523.739 223.381 568.707"
                fill="#ffb8b8"
              />
              <path
                d="M372.58307,718.896h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H357.69622a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,372.58307,718.896Z"
                transform="translate(72.57497 -240.01982) rotate(18.021)"
                fill="#2f2e41"
              />
              <polygon
                points="327.75 568.961 315.49 568.96 309.658 521.672 327.752 521.673 327.75 568.961"
                fill="#ffb8b8"
              />
              <path
                d="M306.73286,565.45722h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H291.846a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,306.73286,565.45722Z"
                fill="#2f2e41"
              />
              <path
                d="M497.75493,708.652c-.07373,0-.14746-.002-.22168-.00585l-13.5857-.64747a4.50609,4.50609,0,0,1-4.2854-4.43261L477.82109,569.1754a1.5,1.5,0,0,0-2.82666-.67871l-71.9585,136.44043a4.47624,4.47624,0,0,1-4.822,2.32129l-13.521-2.5752a4.49925,4.49925,0,0,1-3.40136-5.918l52.42993-148.55176,4.03442-43.94336a4.46976,4.46976,0,0,1,3.936-4.04981c15.2771-1.877,36.62378-14.39453,45.09228-19.68945a4.446,4.446,0,0,1,3.53052-.53125,4.55584,4.55584,0,0,1,2.83081,2.24512A202.74824,202.74824,0,0,1,515.42241,608.2213l-13.2168,96.54A4.47517,4.47517,0,0,1,497.75493,708.652Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#2f2e41"
              />
              <circle cx="290.56412" cy="228.23695" r="24.56103" fill="#ffb8b8" />
              <path
                d="M436.71367,516.82091l-7.39551-52.84473a31.04467,31.04467,0,0,1,60.57373-13.63476c2.106,9.76855,6.385,21.66015,4.82178,34.47949h0C483.761,515.22026,463.87822,524.59276,436.71367,516.82091Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#b3b3b3"
              />
              <path
                d="M469.21367,434.82091h-18a4.50508,4.50508,0,0,1-4.5-4.5v-6a4.50508,4.50508,0,0,1,4.5-4.5h18a4.50508,4.50508,0,0,1,4.5,4.5v6A4.50508,4.50508,0,0,1,469.21367,434.82091Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#b3b3b3"
              />
              <path
                d="M560.43714,534.70305a10.74269,10.74269,0,0,0-8.71486-13.97851l-56.02916-80.21427L479.07942,456.935l60.29893,73.68333a10.80091,10.80091,0,0,0,21.05879,4.08469Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#ffb8b8"
              />
              <path
                d="M513.22,465.04933l-20.23358,13.50719a4.81689,4.81689,0,0,1-7.0291-1.94753l-10.36471-21.92794A13.37737,13.37737,0,0,1,497.888,439.89171l16.22876,17.91906a4.81686,4.81686,0,0,1-.8968,7.23856Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#b3b3b3"
              />
              <path
                d="M362.50212,426.92326a10.526,10.526,0,0,1,.2393,1.64013l42.95745,24.782,10.44141-6.01093,11.13117,14.57227-17.45034,12.43755a8,8,0,0,1-9.5982-.23384l-44.29652-34.94583a10.4971,10.4971,0,1,1,6.57573-12.24133Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#ffb8b8"
              />
              <path
                d="M418.1848,471.353l-10.79389-21.80215a4.81689,4.81689,0,0,1,2.835-6.7204l23.07847-7.45966a13.37737,13.37737,0,0,1,11.80032,24.01173L425.248,473.173a4.81687,4.81687,0,0,1-7.06321-1.82Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#b3b3b3"
              />
              <path
                d="M477.66834,356.33661a4.0633,4.0633,0,0,0,4.31681-2.40945,5.85065,5.85065,0,0,0-.41558-5.13768,10.73569,10.73569,0,0,0-3.7759-3.70338,12.406,12.406,0,0,0-5.98158-2.05789,7.46123,7.46123,0,0,0-5.79386,2.19927,5.37676,5.37676,0,0,0-.97171,5.92757c.89811,1.73189,2.78252,2.70308,4.61861,3.36249a27.09446,27.09446,0,0,0,11.37779,1.49441"
                transform="translate(-170.62199 -159.03278)"
                fill="#2f2e41"
              />
              <path
                d="M485.52171,398.4522c-4.29282.20179-3.55357-8.90722-4.89707-12.98938s-3.19553-8.95129-7.42121-9.734c-3.463-.6414-6.59249,1.8908-9.609,3.70863-5.37643,3.24-12.33584,4.43518-17.9813,1.69061s-9.07856-10.078-6.33291-15.72294a12.87576,12.87576,0,0,1,8.049-6.34147,25.90621,25.90621,0,0,1,10.46215-.50253,53.5269,53.5269,0,0,1,21.88564,7.75738c4.58191,2.87355,8.94169,6.78638,10.30581,12.02s1.91985,19.46522-3.413,20.36624Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#2f2e41"
              />
              <path
                d="M474.29043,343.66756c-3.24269-4.11085-2.02127-10.58761,1.75819-14.21113s9.39951-4.75287,14.615-4.292a29.6206,29.6206,0,0,1,24.02455,17.27486c3.29591,7.53929,3.2687,16.16291,6.24936,23.83231a32.13672,32.13672,0,0,0,43.41,17.54257c5.18809-2.39208,10.1283-7.07633,9.83209-12.78163,3.28018,12.64628-2.62756,27.11236-13.82269,33.84715-6.55732,3.94476-14.32314,5.28395-21.91987,6.20555-4.95074.60059-10.0389,1.04741-14.87-.18987-6.75916-1.731-12.41819-6.71982-15.84494-12.79766s-4.77478-13.16057-4.827-20.13767c-.04071-5.43531.67085-10.87348.29483-16.29592s-2.00606-11.03112-5.93667-14.78538-10.5637-4.98991-14.87753-1.6831c-1.73367,1.329-3.00429,3.26972-4.95633,4.25017s-5.036.21793-5.16665-1.96259Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#2f2e41"
              />
              <path
                d="M380.1846,427.09882H177.60741a6.99354,6.99354,0,0,1-6.98542-6.98542V306.0182a6.99355,6.99355,0,0,1,6.98542-6.98542H380.1846A6.99331,6.99331,0,0,1,387.17,306.0182V420.1134A6.9933,6.9933,0,0,1,380.1846,427.09882ZM177.60741,300.5851a5.43921,5.43921,0,0,0-5.43311,5.4331V420.1134a5.43922,5.43922,0,0,0,5.43311,5.43311H380.1846a5.43946,5.43946,0,0,0,5.4331-5.43311V306.0182a5.43945,5.43945,0,0,0-5.4331-5.4331Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#3f3d56"
              />
              <circle cx="73.76763" cy="191.12496" r="28.96719" fill="#e6e6e6" />
              <path
                d="M356.01238,401.30882l-34.00309-58.8951a2.42147,2.42147,0,0,0-4.19412,0l-20.751,35.94183-30.9356-53.58213a3.10467,3.10467,0,0,0-5.37739,0L217.155,400.28409a3.10463,3.10463,0,0,0,2.68869,4.65695h134.0716A2.42149,2.42149,0,0,0,356.01238,401.30882Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#007bff"
              />
              <rect
                x="14.747"
                y="153.97084"
                width="12.41853"
                height="12.41853"
                fill="#3f3d56"
              />
              <path
                d="M459.03914,259.09882H300.75286a5.46449,5.46449,0,0,1-5.45814-5.45815V164.49093a5.4645,5.4645,0,0,1,5.45814-5.45815H459.03914a5.46431,5.46431,0,0,1,5.45815,5.45815v89.14974A5.4643,5.4643,0,0,1,459.03914,259.09882ZM300.75286,160.2457a4.25,4.25,0,0,0-4.24522,4.24523v89.14974a4.25,4.25,0,0,0,4.24522,4.24523H459.03914a4.25019,4.25019,0,0,0,4.24523-4.24523V164.49093a4.25019,4.25019,0,0,0-4.24523-4.24523Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#ccc"
              />
              <circle cx="182.31201" cy="39.94715" r="22.63388" fill="#f2f2f2" />
              <path
                d="M440.15187,238.94747,413.58312,192.929a1.892,1.892,0,0,0-3.27713,0l-16.21409,28.0836L369.92,179.14556a2.42587,2.42587,0,0,0-4.20169,0L331.6539,238.14679a2.42585,2.42585,0,0,0,2.10085,3.63877H438.51331A1.89207,1.89207,0,0,0,440.15187,238.94747Z"
                transform="translate(-170.62199 -159.03278)"
                fill="#e6e6e6"
              />
              <rect
                x="136.19548"
                y="10.9163"
                width="9.70337"
                height="9.70337"
                fill="#ccc"
              />
            </svg>
          </div>
        </Row>
        <Row className="login-form-graphic">
          <div className="login-form">
            <LoginForm />
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
