import "./homepage.css";

export default function Homepage() {
  

  return (
    <div className="background bg-height">
        <div className="d-flex justify-content-center align-items-center welcome">
            <h1 className='headings'> Welcome to Thrift Barn Furniture!</h1>
        </div>
        <div className='d-flex justify-content-center align-items-center logo'>
          <img src='/scottlogo.jpg' alt='thrift barn logo' className='logo-size'/>
        </div>
        <div className='d-flex justify-content-center treasure'>
            <h1 className='headings'>Where you can discover treasure in every corner.</h1>
        </div>
    </div>
  );
}
