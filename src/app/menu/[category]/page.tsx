'use client';

import Item from '@/components/Item';
import { DayNames } from '@/constants';
import { getMenu } from '@/services/firestore/api';
import { DatabaseCategories } from '@/services/firestore/Categories';
import { MenuItem } from '@/services/firestore/MenuItem';
import React, { useCallback, useEffect, useState } from 'react';

interface MenuParams {
  params: {
    category: string
  }
};

const Menu: React.FC<MenuParams> = ({ params }) => {
  const [menu, setMenu] = useState<any | null>(null);

  const fetchMenu = useCallback(async () => {
    const cat = (await params).category as DatabaseCategories;
    let response = await getMenu(cat);
    setMenu(response)
  }, []);

  useEffect(() => {
    fetchMenu();
}, [fetchMenu]);

if(menu?.some((x: MenuItem) => x.day !== undefined)){
  return(
    <div className='flex flex-col gap-[4rem] mt-[1rem] mx-[3rem] justify-start items-start' >
              {
                  Object.keys(DayNames).map((value: string | DayNames) => (
                    <div key={value} className='mt-[1rem]'>
                      <p>{DayNames[parseInt(value.toString())]}</p>
                      {
                              
                                      menu?.filter((item: MenuItem) => item.day === parseInt(value.toString()))
                                           .map((item : MenuItem) => <Item key={item.title} item={item} />)
                                  }
                    </div>
                  ))
              }
          </div>
  )
}

return(
  <div className='flex flex-col gap-[4rem] mt-[1rem] mx-[3rem] justify-start items-start' >
          {
              menu?.sort((a: any, b: any) => a.title.localeCompare(b.title))
                  .map((item : MenuItem) => {
                  return <Item key={item.title} item={item} />
})
          }
  </div>
)
};

export default Menu;