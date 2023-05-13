import React from 'react'

const Features = () => {
  return (
    <section className='bg-white py-12 flex items-center'>
      <div className=' flex flex-col lg:flex-row lg:w-[800px] xl:w-[980px] lg:mx-auto lg:gap-16 gap-8 mx-6'>
        <div>
          <h3 className='text-2xl font-bold'>Specifications</h3>
          <ul className='list-disc ml-5'>
            <li>Up to 450g coffee beans per roast</li>
            <li>Roasting time between 13 and 18 minutes</li>
            <li>Easy automatic roasting: 5 pre-programmed roasting profiles</li>
            <li>Individual manual roasting (strength of burner and drum speed adjustable)</li>
            <li>Constant air flow</li>
            <li>Patented smoke suppression (afterburner) for indoor roasting</li>
            <li>Thermostatically controlled quartz roasting elements</li>
            <li>Cooling cycle for quick end of roasting time</li>
            <li>Illuminated interior for visual monitoring during roasting</li>
            <li>Removable roasting drum</li>
            <li>Removable silver skin drawer for easy cleaning</li>
            <li>Easy to clean interior</li>
            <li>New higher multi-speed motor for better roasting control - 16 and 32 rpm</li>
            <li>Firmware can be updated (requires cable connection)</li>
            <li>Safety features (e.g. auto shut-off when roaster is not in use)</li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <div>
            <h3 className='text-2xl font-bold'>Technical Specifications</h3>
            <ul className='list-disc ml-5'>
              <li>Manufacturer Name: Behmor 2020SR Plus</li>
              <li>height: 26cm, width: 43cm, depth 31cm</li>
              <li>Weight: 11kg</li>
              <li>220-240 volts, 50/60 Hz</li>
              <li>1630 watts</li>
            </ul>
          </div>
          <div className='mt-5'>
            <h3 className='text-2xl font-bold'>Includes</h3>
            <ul className='list-disc ml-5'>
              <li>Roaster incl. control</li>
              <li>Roast drum</li>
              <li>Chaff collector</li>
              <li>Cleaning brush</li>
              <li>English Manual</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features