import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from '../../sections'

export default function Home() {
  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b' hidden>
        <Hero />
      </section>
      <section className='padding' hidden>
        <PopularProducts />
      </section>
      <section className='padding' hidden>
        <SuperQuality />
      </section>
      <section className='padding-x py-10' hidden>
        <Services />
      </section>
      <section className='padding' hidden>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}
