// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const Breadcrumbs = () => {
//     const router = useRouter();
//     const pathSegments = router.asPath
//         .split('/')
//         .filter(Boolean)
//         .map((segment) => ({
//             path: segment,
//             label: segment
//                 .replace(/-/g, ' ')
//                 .replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase()),
//         }));

//     const breadcrumbItems = [
//         { path: '', label: 'Home' },
//         ...pathSegments,
//     ];

//     return (
//         <>
//             <div className='py-4 breadcrumbs-wrap'>
//                 <nav className="text-sm text-gray-700" aria-label="breadcrumb">
//                     <ol className="flex flex-wrap gap-1">
//                         {breadcrumbItems.map((item, index) => {
//                             const href = breadcrumbItems
//                                 .slice(0, index + 1)
//                                 .map((item) => item.path)
//                                 .filter(Boolean) // Remove empty segments
//                                 .join('/');

//                             return (
//                                 <li key={index} className="flex items-center">
//                                     {index > 0 && <span className="mx-1">/</span>}
//                                     {index === breadcrumbItems.length - 1 ? (
//                                         <span aria-current="page" className="text-gray-600">
//                                             {item.label}
//                                         </span>
//                                     ) : (
//                                         <Link href={`/${href}`} className="hover:text-blue-600">
//                                             {item.label}
//                                         </Link>
//                                     )}
//                                 </li>
//                             );
//                         })}
//                     </ol>
//                 </nav>
//             </div>
//         </>
//     );
// };

// export default Breadcrumbs;



import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
    const router = useRouter();
      const pathWithoutHash = router.asPath.split('#')[0]; // Remove the hash from the path
    const pathSegments = pathWithoutHash
        .split('/')
        .filter(Boolean)
        .map((segment) => ({
            path: segment,
            label: segment
                .replace(/-/g, ' ')
                .replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase()),
        }));

    const breadcrumbItems = [
        { path: '', label: 'Home' },
        ...pathSegments,
    ];

    return (
        <>
            <div className='py-4 breadcrumbs-wrap'>
                <nav className="text-sm text-gray-700" aria-label="breadcrumb">
                    <ol className="flex flex-wrap gap-1">
                        {breadcrumbItems.map((item, index) => {
                            const href = breadcrumbItems
                                .slice(0, index + 1)
                                .map((item) => item.path)
                                .filter(Boolean) // Remove empty segments
                                .join('/');

                            return (
                                <li key={index} className="flex items-center">
                                    {index > 0 && <span className="mx-1">/</span>}
                                    {index === breadcrumbItems.length - 1 ? (
                                        <span aria-current="page" className="text-gray-600">
                                            {item.label}
                                        </span>
                                    ) : (
                                        <Link href={`/${href}`} className="hover:text-gray-900">
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </>
    );
};

export default Breadcrumbs;