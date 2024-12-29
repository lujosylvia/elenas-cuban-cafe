'use client';

import React from "react";
import { CategoryNames, DatabaseCategories } from "@/services/firestore/Categories";
import Link from "next/link";

interface MenuCategoryProps {
  name: DatabaseCategories
};

const MenuCategory: React.FC<MenuCategoryProps> = ({ name }) => {
    return (
        <Link href={`/menu/${name}`} className='flex flex-col items-center justify-center'>
                <p className='text-md uppercase'>{CategoryNames[name]}</p>
        </Link>
    );
}

export default MenuCategory;