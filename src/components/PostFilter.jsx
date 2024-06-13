import React from 'react'
import BaseInput from './UI/input/BaseInput'
import BaseSelect from './UI/select/BaseSelect'

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  const sortOptions = [
    { label: 'Сортировать по названию', value: 'title' },
    { label: 'Сортировать по описанию', value: 'body' },
  ]
  const limitOptions = [
    { label: 'Показывать по 5 постов', value: 5 },
    { label: 'Показывать по 10 постов', value: 10 },
    { label: 'Показывать по 25 постов', value: 25 },
    { label: 'Показывать все', value: -1 },
  ]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <BaseInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder={'Поиск...'}
      />
      <BaseSelect
        value={filter.sort}
        options={sortOptions}
        defaultValue={'Сортировать'}
        onChange={(sort) => setFilter({ ...filter, sort: sort })}
      />
      <BaseSelect
        defaultValue="Постов на странице"
        value={limit}
        options={limitOptions}
        onChange={(v) => setLimit(v)}
      />
    </div>
  )
}

export default PostFilter
