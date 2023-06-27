/* eslint-disable react/prop-types */

import {LiaBurnSolid} from 'react-icons/lia';
import {BsArrowRepeat} from 'react-icons/bs';


const Card = ({ data }) => {


  const { name, budget_name, spent, expiry , available_to_spend} = data;

  return (
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">

      <div className='flex justify-between'>
        <h2 className="text-xl font-bold mb-2">{name}</h2>


        {/* icons */}

        {
            data.card_type === "burner" ? (

        <div className='h-11 w-11 bg-yellow-100 rounded-full'>
            <LiaBurnSolid className='mt-3 ml-3 text-xl text-yellow-800' />
        </div>

            ) : (



        <div className='h-11 w-11 bg-red-100 rounded-full'>
            <BsArrowRepeat className='mt-3 ml-3 text-xl text-red-800' />
        </div>


            )
        }

 

      </div>



      <p className="text-sm text-gray-500 mb-4">{budget_name} .  
      <span>
        Budget
      </span> </p>

      
      <div className="flex gap-2">
        <div className='flex-1'>
          <p className="text-sm font-sm text-gray-600">SPENT</p>
          <p className="text-md font-bold">
            {spent.value} {spent.currency}
          </p>
        </div>
        <div className='flex-1'>
          <p className="text-sm font-sm text-gray-600">FREQUENCY</p>
          <p className="font-bold">Monthly</p>
        </div>
        <div className='flex-1'>
          <p className="text-sm font-sm text-gray-600">EXPIRY</p>
          <p className="font-bold">{expiry}</p>
        </div>
      </div>

      <div>
        <div className="mb-1 text-base font-medium dark:text-white">Small</div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-red-500">
   
          <div
            className="bg-dark-600 h-1.5 rounded-full dark:bg-green-700"
            style={{ width: `${(spent.value*100)/available_to_spend.value}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
          <p className="text-sm">Spent</p>
        </div>
        <div className="flex items-center">
          <p className="text-md mr-2">{spent.value}</p>
          <p>{spent.currency}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
          <p className="text-sm">Balance</p>
        </div>
        <div className="flex items-center">
          <p className="text-md mr-2">{available_to_spend.value}</p>
          <p>{available_to_spend.currency}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
