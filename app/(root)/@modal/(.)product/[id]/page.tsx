import {
    Container,
    ProductImage,
    Title,
    VariantSelector,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // const { id } = await params;
    // const product = await prisma.product.findFirst({
    //     where: { id: Number(id) },
    // });

    // if (!product) {
    //     return notFound();
    // }

    return (
        // <Container className='flex flex-col my-10'>
        //     <div className='flex flex-1'>
        //         <ProductImage
        //             src={product.imageUrl}
        //             size={40}
        //         />
        //         <div className='w-[490px] bg-[#f7F6F5] p-7'>
        //             <Title
        //                 text={product.name}
        //                 size='md'
        //                 className='mb-1 font-extrabold'
        //             />
        //             <p className='text-gray-400'>
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //             </p>
        //             <VariantSelector
        //                 selectedValue='2'
        //                 items={[
        //                     {
        //                         name: "Small",
        //                         value: "1",
        //                     },
        //                     {
        //                         name: "Middle",
        //                         value: "2",
        //                     },
        //                     {
        //                         name: "Big",
        //                         value: "3",
        //                         disabled: true,
        //                     },
        //                 ]}
        //             />
        //         </div>
        //     </div>
        // </Container>
        <h1>Hallo</h1>
    );
}

