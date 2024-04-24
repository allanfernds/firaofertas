import React from 'react';
import Image from 'next/image';
import { Product } from '../lib/types';
import Link from 'next/link';

export const CardProduct = ({ ...product }: Product) => {
  return (
    <Link href={`/productpage/${product.slug}`}>
      <div className="card h-[450px] justify-between rounded-md border bg-base-100 shadow-xl md:w-[250px]">
        <figure>
          <Image
            width={410}
            height={500}
            src={product.imageURL}
            alt={product.title}
            priority={true}
            className=" p-8"
          />
        </figure>
        <div className="h-[200px] p-4">
          <h2 className="text-md">{product.discountPrice && 'a partir de'}</h2>
          <h2 className="card-title text-2xl text-neutral-800">
            {product.discountPrice ? 'R$' + product.discountPrice : 'Grátis'}
          </h2>
          <p className="w-24 text-xs line-through">{product.price}</p>
          <p className="mt-2 space-x-1">{product.description.slice(0, 47) + '...'}</p>
          <span className="m-0 inline h-1 text-xs font-bold text-green-500">
            {'Frete ' + (product.freight > 0 ? 'R$ ' + product.freight + ',00' : 'Grátis')}
          </span>
        </div>
      </div>
    </Link>
  );
};

export const MiniCardProduct = ({ ...product }: Product) => {
  return (
    <Link href={`/productpage/${product.slug}`}>
      <div className="card  m-4 h-[400px] w-[300px] bg-custom-white shadow-xl">
        <figure>
          <Image
            width={200}
            height={175}
            src={product.imageURL}
            alt={product.title}
            priority={true}
            className="h-[310px] w-[300px] object-cover md:h-[210px]"
          />
        </figure>
        <div className="p-6">
          <h2 className="text- card-title">
            {product.title.length <= 15 ? product.title : product.title.slice(0, 15) + ' ...'}
          </h2>
          <p>{product.description.slice(0, 40) + ' ...'}</p>
          <p className="w-24 line-through">{product.price}</p>
          <h2 className="card-title">
            R$ {product.discountPrice ? product.discountPrice : '00,00'}
          </h2>
          <span className="m-0 inline h-1 text-xs font-medium text-emerald-500">
            {'Frete ' + (product.freight > 0 ? 'R$ ' + product.freight + ',00' : 'Grátis')}
          </span>
        </div>
      </div>
    </Link>
  );
};
