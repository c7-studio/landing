import React, { useState, useRef } from "react";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";

function ServiceItem({ itemKey, image, title, description }) {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      viewport={{ once: true }}                  
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5, delay: itemKey * 0.8 }}
      className="max-w-sm sm:w-1/4 sm:mx-2 mt-2 sm:mt-0 mx-auto mb-20">
      <div>
        <Card
          imgSrc={image}
          className="flex flex-col border border-black shadow-none rounded-none pt-3 hover:scale-100"
        ></Card>
      </div>
      <div >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-3">
          {title}
        </h5>
        <hr className="mb-2" />
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default ServiceItem;
