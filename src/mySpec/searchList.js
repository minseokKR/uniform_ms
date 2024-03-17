import { React, useState, useRef, useEffect } from 'react';

const Search = () => {

  // 현재 자동완성목록을 탐색하고있는지 불린값
  const [isAutoSearch, setIsAutoSearch] = useState(false);
  // 내가 인풋에 타이핑한 검색값
  const [searchKeyword, setSearchKeyword] = useState('');
  // 현재 선택된 자동완성 검색값
  const [autoSearchKeyword, setAutoSearchKeyword] = useState('');
  // 현재 선택된 자동완성 목록 인덱스
  const [focusIndex, setFocusIndex] = useState(-1);
  const fucusRef = useRef(null);
  const listRef = useRef(null);

  
  const handleInputChange = (e) => {
    if(isAutoSearch) {
      const enteredValue =
      e.nativeEvent.inputType === "deleteContentBackward"
      ? ""
      : e.nativeEvent.data;
      focusIndex >= 0 && setSearchKeyword(autoSearchKeyword + enteredValue)
      setIsAutoSearch(false)
      setFocusIndex(-1)
      return
    }
    setSearchKeyword(e.target.value)
  }


  const KeyEvent = {
    ArrowDown: () => {
      if (autoSearchList.length === 0) {
        return
      }
      if (listRef.current.childElementCount === focusIndex + 1) {
        setFocusIndex(() => 0)
        return
      }
      if (focusIndex === -1) {
        setIsAutoSearch(true)
      }
      setFocusIndex((index) => index + 1)
      setAutoSearchKeyword(autoSearchList.results[focusIndex + 1].title)
    },
    ArrowUp: () => {
      if (focusIndex === -1) {
        return
      }
      if (focusIndex === 0) {
        setAutoSearchKeyword("")
        setFocusIndex((index) => index - 1)
        setIsAutoSearch(false)
        return
      }

      setFocusIndex((index) => index - 1)
      setAutoSearchKeyword(autoSearchList.results[focusIndex - 1].title)
    },
    Escape: () => {
      setAutoSearchKeyword("")
      setFocusIndex(-1)
      setIsAutoSearch(false)
    },
  }

  const handleKeyUp = (e) => {
    if(KeyEvent[e.key]) KeyEvent[e.key]()
  }

  useEffect(() => {
    if (isAutoSearch) {
      return;
    }
    getSearchQuery({ query: searchKeyword });
  }, [getSearchQuery, searchKeyword, isAutoSearch]);

  useEffect(() => {
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focusIndex]);


  return (
    <div>
      <input
        type='text'  
        placeholder='학교 입력'
        title='검색'
        name='검색'
        value={ isAutoSearch ? autoSearchKeyword : searchKeyword }
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />

    </div>

  )
}

export default Search;