import { Doc } from '@/convex/_generated/dataModel'
import Link from 'next/link'
import { FC } from 'react'

type Props = {
  docsList: Doc<'documents'>[]
}

export const Breadcrumbs: FC<Props> = ({ docsList }) => {
  return (
    <nav className="text-sm sm:text-base">
      <ol className="flex">
        {docsList.map((item, index) => (
          <li key={item._id} className="flex items-center gap-x-1 group/bread">
            {index < docsList.length - 1 ? (
              <Link
                href={`/documents/${item._id}`}
                className="flex items-center gap-x-1"
              >
                <>
                  {!!item.icon && (
                    <p className="group-hover/bread:cursor-pointer">
                      {item.icon}
                    </p>
                  )}
                  <span className="text-gray-400 dark:text-gray-600 group-hover/bread:underline">
                    {item.title}
                  </span>
                </>
              </Link>
            ) : (
              <>
                {!!item.icon && <p>{item.icon}</p>}
                <span>{item.title}</span>
              </>
            )}
            {index < docsList.length - 1 && (
              <span className="mx-1 text-gray-500">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
