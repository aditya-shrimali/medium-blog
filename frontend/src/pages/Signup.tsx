import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <section className="flex">
      <div className="flex-1">
        <Auth type="signup" />
      </div>
      <div className="invisible md:visible flex-1">
        <Quote />
      </div>
    </section>
  );
};

export default Signup;
