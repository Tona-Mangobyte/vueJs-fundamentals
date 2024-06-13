import { watch, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'

export function useFeature (id: MaybeRefOrGetter<number>) {
  watch(() => toValue(id), id => {
    // react to id changes
    console.log('id changed to', id)
  })
}
