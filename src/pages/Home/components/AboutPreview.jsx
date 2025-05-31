import profile_image from '../../../../public/images/profile_image.jpeg'

export default function AboutPreview() {
  return (
    <section className="p-4 bg-surface rounded flex flex-col md:flex-row shadow-themeShadow">
      <div className="flex-1 text-center md:text-left mb-4">
        <h2 className="text-xl text-primaryColor font-bold mb-2">About Me</h2>
        <p className="items-center">
          I’m a curious developer exploring the web world. Learn more about my journey on the <a href="/path" className="text-secondaryColor underline">Path page</a>.
        </p>

      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80
                      flex items-center justify-center mx-auto
                      rounded-full shadow-themeShadowInset">
        <img src={profile_image} alt="img" className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72
                                                      rounded-full object-cover"/>
      </div>
    </section>
  );
}
      