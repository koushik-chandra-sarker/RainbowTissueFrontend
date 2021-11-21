import React from 'react';
import {Splide, SplideSlide} from "splide-nextjs/react-splide/dist/js";
const sqBanner = [
    {
        src: "static/image/banner/square/01-02.jpg",
        url: "#"
    },
    {
        src: "static/image/banner/square/01-03.jpg",
        url: "#"
    },
    {
        src: "static/image/banner/square/01-04.jpg",
        url: "#"
    },
    {
        src: "static/image/banner/square/01-05.jpg",
        url: "#"
    },
    {
        src: "static/image/banner/square/01-06.jpg",
        url: "#"
    },
    {
        src: "static/image/banner/square/01-07.jpg",
        url: "#"
    },

]
const Banner = () => {
    return (
        <div className="bg-white">
            <div className={'sm:w-4/5 w-full mx-auto'}>
                {/* Mobile filter dialog */}
                {/*       <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden"
                                onClose={setMobileFiltersOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25"/>
                            </Transition.Child>

                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div
                                    className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                    <div className="px-4 flex items-center justify-between">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>

                                     Filters
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                                            {subCategories.map((category) => (
                                                <li key={category.name}>
                                                    <a href={category.href} className="block px-2 py-3">
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>

                                        {filters.map((section) => (
                                            <Disclosure as="div" key={section.id}
                                                        className="border-t border-gray-200 px-4 py-6">
                                                {({open}) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button
                                                                className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                {open ? (
                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true"/>
                                ) : (
                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true"/>
                                )}
                              </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value}
                                                                         className="flex items-center">
                                                                        <input
                                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="checkbox"
                                                                            defaultChecked={option.checked}
                                                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </div>
                            </Transition.Child>
                        </Dialog>
                    </Transition.Root>*/}

                <main className="max-w-4/5 mx-auto px-4 sm:px-0">
                    {/* <div className="flex items-center">
                            <button
                                type="button"
                                className="p-2 text-primary border border-primary hover:text-primary-dark lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <MenuAlt2Icon className="w-5 h-5" aria-hidden="true"/>


                            </button>
                        </div>*/}

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-10">
                            {/* Filters */}
                            {/*<form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list"
                                        className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                                <a href={category.href}>{category.name}</a>
                                            </li>
                                        ))}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                            {({open}) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button
                                                            className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                            <span
                                                                className="font-medium text-gray-900">{section.name}</span>
                                                            <span className="ml-6 flex items-center">
                                                                  {open ? (
                                                                      <MinusSmIcon className="h-5 w-5"
                                                                                   aria-hidden="true"/>
                                                                  ) : (
                                                                      <PlusSmIcon className="h-5 w-5"
                                                                                  aria-hidden="true"/>
                                                                  )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                        className="ml-3 text-sm text-gray-600"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>*/}

                            {/* Product grid */}
                            <div className="lg:col-span-5">
                                {/* Replace with your content */}

                                <picture>
                                    <source className={'w-full'} media="(min-width:650px)"
                                            srcSet="static/image/banner/rainbow_banner.jpg"/>
                                    {/*<source media="(min-width:465px)" srcSet="img_white_flower.jpg"/>*/}
                                    <img className={'w-full'} src="static/image/rainbow_banner.webp" alt="Flowers"
                                         style={{width: "auto"}}/>
                                </picture>
                                <div className={'mt-2'}>
                                    <Splide
                                        options={{
                                            type: 'loop',
                                            autoplay: true,
                                            rewind: true,
                                            // width: 800,
                                            speed: '300',
                                            interval: 3000,
                                            gap: '0.75rem',
                                            pagination: false,
                                            pauseOnHover: true,
                                            // fixedWidth: 200,
                                            width: "100rem",
                                            // height: '20rem',
                                            perPage: 4,
                                            cover: true,
                                            focus: 'left',
                                            isNavigation: true,
                                            updateOnMove: true,
                                            breakpoints: {
                                                767: {
                                                    perPage: 3,
                                                    // height: '12rem',

                                                },
                                                640: {
                                                    perPage: 2,
                                                    // height: '12rem',
                                                },
                                            },
                                        }}

                                        hasSliderWrapper
                                        // hasAutoplayControls
                                        // hasAutoplayProgress
                                    >
                                        {sqBanner.map(slide => (
                                            <SplideSlide key={slide.src}>
                                                <a href={slide.url}><img src={slide.src} alt={slide.alt}/></a>
                                            </SplideSlide>
                                        ))}
                                    </Splide>
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Banner;