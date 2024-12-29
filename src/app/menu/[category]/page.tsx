'use client';

import Item from '@/components/Item';
import { DayNames } from '@/constants';
import { getMenu } from '@/services/firestore/api';
import { DatabaseCategories } from '@/services/firestore/Categories';
import { MenuItem } from '@/services/firestore/MenuItem';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

const Menu: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[] | null>(null);

  const pathName = usePathname();
  const category = useMemo(() => pathName.replace('/menu/', ''), []);

  const fetchMenu = useCallback(async () => {
    const cat = category as DatabaseCategories;
    const response = await getMenu(cat) as MenuItem[];
    setMenu(response);
  }, [category]);

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
              menu?.sort((a: MenuItem, b: MenuItem) => a.title.localeCompare(b.title))
                  .map((item : MenuItem) => {
                  return <Item key={item.title} item={item} />
})
          }
  </div>
)
};

export default Menu;