import profile_image from '../../../../public/images/profile_image.jpeg'

export default function Hero() {
  return (
    <div className="p-4 bg-surface rounded flex flex-col md:flex-row items-center gap-4">
      <div className="flex-1 text-center md:text-left">
        <p className="p-2">
          This is my personal portfolio! <br /> A place where I showcase my work and experiment with JavaScript, the language of the web.
        </p>
      </div>
      <img src={profile_image} alt="img" className="w-60 h-60 rounded-full object-cover"/>
    </div>
  );
}