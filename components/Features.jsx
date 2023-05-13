import React from 'react'
import {FaGlobeAsia} from "react-icons/fa"
import {MdNoiseAware,MdOutlineMicrowave} from "react-icons/md"
import {GiSmokeBomb} from 'react-icons/gi'
import {AiOutlineProfile} from 'react-icons/ai'
import FeatureItem from './FeatureItem'


const Features = () => {
  return (
    <section id='features' className='bg-white py-24  lg:w-[800px] xl:w-[980px] lg:mx-auto mx-6'>
      <div className='mb-5 flex flex-col gap-6 lg:gap-12 lg:flex-row'>
        <div className='lg:w-3/5'>
          <p>
            Behmor AB Plus 2020SR is easy to use for those with no knowledge of roasting – simply, press few buttons and start, just like operating a microwave oven. For knowledgeable roasters who wants to alter the profile of roasting, they have the flexibility to adjust the drum speed, roasting time and roasting temperature. Checking the exhaust and chamber temperature is as easy as pressing a button to display temperature. The Rosetta Stone function provides the roaster some control and action before the roasting beans reach second crack.
          </p>
        </div>
        <div className='lg:w-2/5 flex flex-col gap-1 lg:pl-3'>
          <FeatureItem icon={<FaGlobeAsia className='text-dullgold w-5 h-5' />} text='Built for Asia Use' />
          <FeatureItem icon={<MdNoiseAware className='text-dullgold w-5 h-5' />} text='Low Noise Roasting' />
          <FeatureItem icon={<GiSmokeBomb className='text-dullgold w-5 h-5' />} text='Smoke suppression technology' />
          <FeatureItem icon={<MdOutlineMicrowave className='text-dullgold w-5 h-5' />} text='Space Saving: Microwave size' />
          <FeatureItem icon={<AiOutlineProfile className='text-dullgold w-5 h-5' />} text='Simple: Preset Profiles. Press, Start and Roast' />
        </div>
      </div>
      <div className=' flex flex-col lg:flex-row lg:gap-16 gap-6 '>
        <div>
          <h3 className='text-2xl font-bold mb-2'>Specifications</h3>
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
            <h3 className='text-2xl font-bold mb-2'>Technical Specifications</h3>
            <table className="table-auto border border-collapse">
              <tbody>
                <tr>
                  <td className="px-4 py-2 border font-semibold">Manufacturer Name</td>
                  <td className="px-4 py-2 border">Behmor 2020SR Plus</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold">Dimensions</td>
                  <td className="px-4 py-2 border">43cm x 31cm x 26cm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold font-semibold">Weight</td>
                  <td className="px-4 py-2 border">11kg</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold">Voltage</td>
                  <td className="px-4 py-2 border">220-240 volts, 50/60 Hz</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold">Power</td>
                  <td className="px-4 py-2 border">1630 watts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mt-5'>
            <h3 className='text-2xl font-bold mb-2'>Includes</h3>
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