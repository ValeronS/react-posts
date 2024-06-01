import React from 'react'
import BaseInput from './UI/input/BaseInput'
import BaseSelect from './UI/select/BaseSelect'

const PostFilter = ({ filter, setFilter }) => {
  const sortOptions = [
    { label: 'По названию', value: 'title' },
    { label: 'По описанию', value: 'body' },
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
    </div>
  )
}

export default PostFilter
