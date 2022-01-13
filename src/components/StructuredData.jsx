import { h } from 'preact';

function StructuredData({ ldData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldData, null, 4) }}
      />
    </>
  );
}

export default ArticleSchema;
