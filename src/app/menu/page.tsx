'use client';

import MenuCategory from "@/components/MenuCategory";
import { DatabaseCategories } from "@/services/firestore/Categories";

const MainMenu: React.FC = () => {
  return(
    <div className='mt-[2rem] flex flex-col gap-[18px] text-md justify-center items-center'
        >
        {
            Object.values(DatabaseCategories).map((category) => {
                const dbcat = category as DatabaseCategories;
                return (
                    <MenuCategory key={dbcat} name={dbcat} />
                );
            })
        }
    </div>
)
}

export default MainMenu;