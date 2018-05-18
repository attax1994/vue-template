import Vue from 'vue'
import TimeParser from '@/persistence/filter/TimeParser.pipe'
import DateParser from '@/persistence/filter/DateParse.pipe'
import NumberWithComma from '@/persistence/filter/NumberWithComma.pipe'
import FilePathParser from '@/persistence/filter/FilePathParser.pipe'
import NumberToChar from '@/persistence/filter/NumberToChar.pipe'

Vue.filter('TimeParser', TimeParser)
Vue.filter('NumberWithComma', NumberWithComma)
Vue.filter('DateParser', DateParser)
Vue.filter('FilePathParser', FilePathParser)
Vue.filter('NumberToChar', NumberToChar)