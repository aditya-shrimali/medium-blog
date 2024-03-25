import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <section className="flex">
      <div className="flex-1">
        <Auth type="signin" />
      </div>
      <div className="hidden md:flex md:flex-1">
        <Quote />
      </div>
    </section>
  );
};

export default Signin;
