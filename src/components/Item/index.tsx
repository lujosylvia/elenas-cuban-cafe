import React, { useCallback, useEffect, useState } from "react";
import Price from "../Price";
import { MenuItem } from "@/services/firestore/MenuItem";
import {Image} from "@nextui-org/image";
import { fetchImageUrl } from "@/services/firestore/api";

export interface ItemProps {
    item: MenuItem,
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const [imageUrl, setImageUrl] = useState<string>();

    const fetchImage = useCallback(async (imageName: string) => {
        const url = await fetchImageUrl(imageName);
        setImageUrl(url);
    }, []);

    useEffect(() => {
        if(item.imageName && !imageUrl) {
            fetchImage(item.imageName)
        }
    }, [item?.imageName])

    return (
        <div className='flex-1 flex flex-col w-[100%] md:flex-row items-start'>
            <div className='flex-2 flex flex-col gap-[20px] m-[1rem] md:w-[70%]'>
                <p className='uppercase text-sm md:text-md'>{item.title} {item["spanish-title"] ? (`| ${item['spanish-title']}`) : null}</p>
                {
                    item.description ? (
                    <p className='text-sm md:text-md'>{item.description}</p>
                    ) : null
                }
                <Price price={item.price} quantity={item.quantity} units={item.units ?? "count"} />
            </div>
            <div className='flex-1 flex flex-row w-[100%] justify-center items-center'>
                { item.imageName && (<Image isBlurred className="rounded-[5%] m-2" height={200} width={225} src={imageUrl} />) }
            </div>
        </div>
    );
}

export default Item;