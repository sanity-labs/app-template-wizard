import {Suspense} from 'react'
import {useDocuments} from '@sanity/sdk-react'
import './ExampleComponent.css'

function DocumentList() {
  const {data, hasMore, isPending, loadMore, count} = useDocuments({
    documentType: 'document',
    batchSize: 10,
    orderings: [{field: '_updatedAt', direction: 'desc'}],
  })

  return (
    <div>
      <h1>My Sanity App</h1>
      <p>Total documents: {count}</p>
      <ol className="document-list">
        {data.map((doc) => (
          <li key={doc.documentId}>
            <code>{JSON.stringify(doc, null, 2)}</code>
          </li>
        ))}
      </ol>
      {hasMore && (
        <button onClick={loadMore} disabled={isPending}>
          {isPending ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  )
}

export function ExampleComponent() {
  return (
    <Suspense fallback={<div>Loading documents...</div>}>
      <DocumentList />
    </Suspense>
  )
}
