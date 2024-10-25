// providers/schedular-provider.tsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import React2, { createContext as createContext2, useContext as useContext2, useReducer } from "react";
// providers/modal-provider.tsx
import React, { createContext, useContext, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
var ModalContext = createContext(void 0);
var ModalProvider = function(param) {
    var children = param.children;
    var _useState = _sliced_to_array(useState(null), 2), modalContent = _useState[0], setModalContent = _useState[1];
    var _useState1 = _sliced_to_array(useState(null), 2), data = _useState1[0], setData = _useState1[1];
    var _useDisclosure = useDisclosure(), isOpen = _useDisclosure.isOpen, onOpen = _useDisclosure.onOpen, onClose = _useDisclosure.onClose;
    var showModal = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(param) {
            var title, body, footer, modalClassName, getter, result, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        title = param.title, body = param.body, footer = param.footer, modalClassName = param.modalClassName, getter = param.getter;
                        setModalContent({
                            title: title,
                            body: body,
                            footer: footer,
                            modalClassName: modalClassName
                        });
                        if (!getter) return [
                            3,
                            5
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            getter()
                        ];
                    case 2:
                        result = _state.sent();
                        setData(result);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        console.error("Error fetching data:", error);
                        setData(null);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            3,
                            6
                        ];
                    case 5:
                        setData(null);
                        _state.label = 6;
                    case 6:
                        onOpen();
                        return [
                            2
                        ];
                }
            });
        });
        return function showModal(_) {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ React.createElement(ModalContext.Provider, {
        value: {
            showModal: showModal,
            onClose: onClose,
            data: data
        }
    }, children, /* @__PURE__ */ React.createElement(Modal, {
        backdrop: "blur",
        classNames: {
            backdrop: "max-h-screen overflow-hidden",
            wrapper: "max-h-screen overflow-hidden"
        },
        isOpen: isOpen,
        onOpenChange: onClose
    }, /* @__PURE__ */ React.createElement(ModalContent, {
        className: (modalContent === null || modalContent === void 0 ? void 0 : modalContent.modalClassName) || ""
    }, modalContent && /* @__PURE__ */ React.createElement(React.Fragment, null, modalContent.title && /* @__PURE__ */ React.createElement(ModalHeader, null, modalContent.title), modalContent.body && /* @__PURE__ */ React.createElement(ModalBody, null, modalContent.body), modalContent.footer && /* @__PURE__ */ React.createElement(ModalFooter, null, modalContent.footer)))));
};
var useModalContext = function() {
    var context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};
// providers/schedular-provider.tsx
var initialState = {
    // events: [
    //   {
    //     id: "1d4c5c73-b5fa-4f67-bb6e-1d5d66cbd57d",
    //     title: "Kickoff Meeting.",
    //     description: "Initial project kickoff with stakeholders.",
    //     startDate: new Date("2024-10-07T09:00:00"),
    //     endDate: new Date("2024-10-07T10:00:00"),
    //     variant: "primary",
    //   },
    //   {
    //     id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
    //     title: "Client Feedback Session.",
    //     description: "Review client feedback on the recent project.",
    //     startDate: new Date("2024-10-07T11:00:00"),
    //     endDate: new Date("2024-10-07T12:30:00"),
    //     variant: "success",
    //   },
    //   {
    //     id: "e68a77f2-5891-4a6f-9a48-b14e2f9f8141",
    //     title: "Marketing Strategy Meeting.",
    //     description: "Plan the marketing strategy for Q4.",
    //     startDate: new Date("2024-10-08T14:00:00"),
    //     endDate: new Date("2024-10-08T15:30:00"),
    //     variant: "warning",
    //   },
    //   {
    //     id: "0e6e1437-249c-4c81-8c04-4f5a0b3d9a93",
    //     title: "Risk Assessment Review.",
    //     description: "Evaluate potential project risks.",
    //     startDate: new Date("2024-10-09T10:00:00"),
    //     endDate: new Date("2024-10-09T11:30:00"),
    //     variant: "danger",
    //   },
    //   {
    //     id: "8f93e1a7-b4ec-4b75-9f41-5261cd6d8d25",
    //     title: "Weekly Standup.",
    //     description: "Weekly team status update.",
    //     startDate: new Date("2024-10-09T09:30:00"),
    //     endDate: new Date("2024-10-09T10:00:00"),
    //     variant: "default",
    //   },
    //   {
    //     id: "d3e5c45a-ef1d-4bc9-b01d-9c7f3c8c7a5b",
    //     title: "Design Review.",
    //     description: "Review the latest design mockups.",
    //     startDate: new Date("2024-10-10T13:00:00"),
    //     endDate: new Date("2024-10-10T14:00:00"),
    //     variant: "primary",
    //   },
    //   {
    //     id: "d01ab0ec-5b5a-4f79-97ec-b64e62956c71",
    //     title: "Budget Meeting.",
    //     description: "Discuss the budget for the next fiscal year.",
    //     startDate: new Date("2024-10-10T10:00:00"),
    //     endDate: new Date("2024-10-10T11:30:00"),
    //     variant: "success",
    //   },
    //   {
    //     id: "0f8b843e-8f72-44ec-910f-4aa0f368b2c8",
    //     title: "Team Building Activity.",
    //     description: "Fun activities to strengthen team bonds.",
    //     startDate: new Date("2024-10-11T16:00:00"),
    //     endDate: new Date("2024-10-11T19:00:00"),
    //     variant: "warning",
    //   },
    //   {
    //     id: "5a0c74bc-c3d8-4c37-92e2-b4b9b73dbf2b",
    //     title: "Vendor Negotiation.",
    //     description: "Negotiate terms with potential vendors.",
    //     startDate: new Date("2024-10-12T10:30:00"),
    //     endDate: new Date("2024-10-12T12:00:00"),
    //     variant: "danger",
    //   },
    //   {
    //     id: "3f40cd3c-bc73-4eab-ae02-032f9610d0c4",
    //     title: "Product Development Update.",
    //     description: "Update on the product development status.",
    //     startDate: new Date("2024-10-12T14:00:00"),
    //     endDate: new Date("2024-10-12T15:00:00"),
    //     variant: "default",
    //   },
    //   {
    //     id: "3a1e6f45-91b0-4d88-bb34-6dbf17326c98",
    //     title: "Conference Preparation.",
    //     description: "Prepare for the upcoming industry conference.",
    //     startDate: new Date("2024-10-13T08:00:00"),
    //     endDate: new Date("2024-10-13T10:00:00"),
    //     variant: "primary",
    //   },
    //   {
    //     id: "4c1f4e5a-bb6d-43eb-846e-1f5c403203f2",
    //     title: "Social Media Strategy.",
    //     description: "Develop a strategy for social media marketing.",
    //     startDate: new Date("2024-10-13T09:00:00"),
    //     endDate: new Date("2024-10-13T10:30:00"),
    //     variant: "success",
    //   },
    //   {
    //     id: "6e18bc5f-5d4e-407c-8395-3b2ae2a3c65a",
    //     title: "Sales Training.",
    //     description: "Conduct training for the sales team.",
    //     startDate: new Date("2024-10-13T13:00:00"),
    //     endDate: new Date("2024-10-13T15:00:00"),
    //     variant: "warning",
    //   },
    //   {
    //     id: "d09e9e34-5c5f-44f7-8f8a-8cc9dcda7aa2",
    //     title: "Emergency System Update.",
    //     description: "Critical update to prevent system failures.",
    //     startDate: new Date("2024-10-12T22:00:00"),
    //     endDate: new Date("2024-10-13T02:00:00"),
    //     variant: "danger",
    //   },
    //   {
    //     id: "09b6e1d5-3ab6-4d99-93e5-e98b8b49d5f6",
    //     title: "Quarterly Business Review.",
    //     description: "Review business performance for the quarter.",
    //     startDate: new Date("2024-10-07T10:00:00"),
    //     endDate: new Date("2024-10-07T12:00:00"),
    //     variant: "default",
    //   },
    //   {
    //     id: "53c9fcd3-80ee-4c76-b2c3-2c65b73f9785",
    //     title: "Feedback Collection.",
    //     description: "Collect feedback from team members.",
    //     startDate: new Date("2024-10-08T15:00:00"),
    //     endDate: new Date("2024-10-08T16:00:00"),
    //     variant: "primary",
    //   },
    //   {
    //     id: "4cf73125-9477-4798-8f1f-3cd18a64b23a",
    //     title: "Product Roadmap Discussion.",
    //     description: "Discuss future product roadmap.",
    //     startDate: new Date("2024-10-09T14:00:00"),
    //     endDate: new Date("2024-10-09T15:30:00"),
    //     variant: "success",
    //   },
    //   {
    //     id: "9824cf9c-7d70-4209-b8b8-7092875c3038",
    //     title: "Website Redesign Meeting.",
    //     description: "Plan the redesign of the company website.",
    //     startDate: new Date("2024-10-10T10:00:00"),
    //     endDate: new Date("2024-10-10T11:00:00"),
    //     variant: "warning",
    //   },
    //   {
    //     id: "e8c64046-2097-41e5-8b86-d300d5710579",
    //     title: "Data Security Workshop.",
    //     description: "Workshop on data security best practices.",
    //     startDate: new Date("2024-10-11T13:00:00"),
    //     endDate: new Date("2024-10-11T15:00:00"),
    //     variant: "danger",
    //   },
    //   {
    //     id: "12d8b2c5-b13e-4c25-89e8-3d4df1ae3c41",
    //     title: "Innovation Session.",
    //     description: "Brainstorming session for innovative ideas.",
    //     startDate: new Date("2024-10-12T11:00:00"),
    //     endDate: new Date("2024-10-12T12:30:00"),
    //     variant: "danger",
    //   },
    // ],
    events: []
};
var schedulerReducer = function(state, action) {
    switch(action.type){
        case "ADD_EVENT":
            return _object_spread_props(_object_spread({}, state), {
                events: _to_consumable_array(state.events).concat([
                    action.payload
                ])
            });
        case "REMOVE_EVENT":
            return _object_spread_props(_object_spread({}, state), {
                events: state.events.filter(function(event) {
                    return event.id !== action.payload.id;
                })
            });
        case "UPDATE_EVENT":
            return _object_spread_props(_object_spread({}, state), {
                events: state.events.map(function(event) {
                    return event.id === action.payload.id ? action.payload : event;
                })
            });
        default:
            return state;
    }
};
var SchedulerContext = createContext2(void 0);
var SchedulerProvider = function(param) {
    var children = param.children, onAddEvent = param.onAddEvent, onUpdateEvent = param.onUpdateEvent, onDeleteEvent = param.onDeleteEvent, _param_weekStartsOn = param.weekStartsOn, weekStartsOn = _param_weekStartsOn === void 0 ? "sunday" : _param_weekStartsOn;
    var handleEventStyling = function handleEventStyling(event, dayEvents) {
        var eventsOnHour = dayEvents.filter(function(e) {
            return e.startDate < event.endDate && e.endDate > event.startDate;
        });
        var numEventsOnHour = eventsOnHour.length || 1;
        var indexOnHour = eventsOnHour.indexOf(event);
        var eventHeight = 0;
        var maxHeight = 0;
        var eventTop = 0;
        if (_instanceof(event.startDate, Date) && _instanceof(event.endDate, Date)) {
            var startTime = event.startDate.getHours() * 60 + event.startDate.getMinutes();
            var endTime = event.endDate.getHours() * 60 + event.endDate.getMinutes();
            var diffInMinutes = endTime - startTime;
            eventHeight = diffInMinutes / 60 * 64;
            var eventStartHour = event.startDate.getHours() + event.startDate.getMinutes() / 60;
            var dayEndHour = 24;
            maxHeight = Math.max(0, (dayEndHour - eventStartHour) * 64);
            eventHeight = Math.min(eventHeight, maxHeight);
            eventTop = eventStartHour * 64;
        } else {
            console.error("Invalid event or missing start/end dates.");
        }
        return {
            height: "".concat(eventHeight < 10 ? 20 : eventHeight > maxHeight ? maxHeight : eventHeight, "px"),
            top: "".concat(eventTop, "px"),
            zIndex: indexOnHour + 1,
            left: "".concat(indexOnHour * 100 / numEventsOnHour, "%"),
            maxWidth: "".concat(100 / numEventsOnHour, "%"),
            minWidth: "".concat(100 / numEventsOnHour, "%")
        };
    };
    var handleAddEvent = function handleAddEvent(event) {
        dispatch({
            type: "ADD_EVENT",
            payload: event
        });
        if (onAddEvent) {
            onAddEvent(event);
        }
    };
    var handleUpdateEvent = function handleUpdateEvent(event, id) {
        dispatch({
            type: "UPDATE_EVENT",
            payload: _object_spread_props(_object_spread({}, event), {
                id: id
            })
        });
        if (onUpdateEvent) {
            onUpdateEvent(event);
        }
    };
    var handleDeleteEvent = function handleDeleteEvent(id) {
        dispatch({
            type: "REMOVE_EVENT",
            payload: {
                id: id
            }
        });
        if (onDeleteEvent) {
            onDeleteEvent(id);
        }
    };
    var _useReducer = _sliced_to_array(useReducer(schedulerReducer, initialState), 2), state = _useReducer[0], dispatch = _useReducer[1];
    var getDaysInMonth = function(month, year) {
        return Array.from({
            length: new Date(year, month + 1, 0).getDate()
        }, function(_, index) {
            return {
                day: index + 1,
                events: []
            };
        });
    };
    var getDaysInWeek = function(week, year) {
        var startDay = weekStartsOn === "sunday" ? 0 : 1;
        var janFirst = new Date(year, 0, 1);
        var janFirstDayOfWeek = janFirst.getDay();
        var weekStart = new Date(janFirst);
        weekStart.setDate(janFirst.getDate() + (week - 1) * 7 + (startDay - janFirstDayOfWeek + 7) % 7);
        var days = [];
        for(var i = 0; i < 7; i++){
            var day = new Date(weekStart);
            day.setDate(day.getDate() + i);
            days.push(day);
        }
        return days;
    };
    var getWeekNumber = function(date) {
        var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        var weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 864e5 + 1) / 7);
        return weekNo;
    };
    var getEventsForDay = function(day, currentDate) {
        return state === null || state === void 0 ? void 0 : state.events.filter(function(event) {
            var eventStart = new Date(event.startDate);
            var eventEnd = new Date(event.endDate);
            var startOfDay = new Date(currentDate);
            startOfDay.setDate(day);
            startOfDay.setHours(0, 0, 0, 0);
            var endOfDay = new Date(currentDate);
            endOfDay.setDate(day + 1);
            endOfDay.setHours(0, 0, 0, 0);
            var isSameDay = eventStart.getDate() === day && eventStart.getMonth() === currentDate.getMonth() && eventStart.getFullYear() === currentDate.getFullYear();
            var isSpanningDay = eventStart < endOfDay && eventEnd >= startOfDay;
            return isSameDay || isSpanningDay;
        });
    };
    var getDayName = function(day) {
        var days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        return days[day];
    };
    var getters = {
        getDaysInMonth: getDaysInMonth,
        getEventsForDay: getEventsForDay,
        getDaysInWeek: getDaysInWeek,
        getWeekNumber: getWeekNumber,
        getDayName: getDayName
    };
    var handlers = {
        handleEventStyling: handleEventStyling,
        handleAddEvent: handleAddEvent,
        handleUpdateEvent: handleUpdateEvent,
        handleDeleteEvent: handleDeleteEvent
    };
    return /* @__PURE__ */ React2.createElement(SchedulerContext.Provider, {
        value: {
            events: state,
            dispatch: dispatch,
            getters: getters,
            handlers: handlers,
            weekStartsOn: weekStartsOn
        }
    }, /* @__PURE__ */ React2.createElement(ModalProvider, null, children));
};
var useScheduler = function() {
    var context = useContext2(SchedulerContext);
    if (!context) {
        throw new Error("useScheduler must be used within a SchedulerProvider");
    }
    return context;
};
// components/schedule/_components/view/schedular-view-filteration.tsx
import React10, { useEffect as useEffect3 } from "react";
import { motion as motion5 } from "framer-motion";
import { Button as Button5 } from "@nextui-org/button";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Calendar, CalendarDaysIcon } from "lucide-react";
import { BsCalendarMonth, BsCalendarWeek } from "react-icons/bs";
// components/schedule/_modals/add-event-modal.tsx
import React4, { useEffect as useEffect2, useState as useState3 } from "react";
import { ModalFooter as ModalFooter2 } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
// components/schedule/_components/add-event-components/select-date.tsx
import { parseDate, Time } from "@internationalized/date";
import { DateRangePicker } from "@nextui-org/date-picker";
import { TimeInput } from "@nextui-org/date-input";
import React3, { useEffect, useState as useState2 } from "react";
function getFormattedDate(date) {
    return "".concat(date.getFullYear(), "-").concat(String(date.getMonth() + 1).padStart(2, "0"), "-").concat(String(date.getDate()).padStart(2, "0"));
}
function calendarDateToJSDate(calendarDate) {
    var year = calendarDate.year, month = calendarDate.month, day = calendarDate.day;
    return new Date(year, month - 1, day);
}
function SelectDate(param) {
    var data = param.data, setValue = param.setValue;
    var _data_startDate, _data_startDate1, _data_endDate, _data_endDate1;
    var _useState2 = _sliced_to_array(useState2({
        startDate: data ? parseDate(getFormattedDate(data === null || data === void 0 ? void 0 : data.startDate)) : parseDate("2024-04-06"),
        endDate: data ? parseDate(getFormattedDate(data === null || data === void 0 ? void 0 : data.endDate)) : parseDate("2024-04-10"),
        startTime: new Time((data === null || data === void 0 ? void 0 : (_data_startDate = data.startDate) === null || _data_startDate === void 0 ? void 0 : _data_startDate.getHours()) || 0, (data === null || data === void 0 ? void 0 : (_data_startDate1 = data.startDate) === null || _data_startDate1 === void 0 ? void 0 : _data_startDate1.getMinutes()) || 0),
        endTime: new Time((data === null || data === void 0 ? void 0 : (_data_endDate = data.endDate) === null || _data_endDate === void 0 ? void 0 : _data_endDate.getHours()) || 0, (data === null || data === void 0 ? void 0 : (_data_endDate1 = data.endDate) === null || _data_endDate1 === void 0 ? void 0 : _data_endDate1.getMinutes()) || 0)
    }), 2), dateState = _useState2[0], setDateState = _useState2[1];
    useEffect(function() {
        var _dateState_startTime, _dateState_startTime1, _dateState_endTime, _dateState_endTime1;
        if (!dateState) return;
        var jsStartDate = calendarDateToJSDate(dateState.startDate);
        var jsEndDate = calendarDateToJSDate(dateState.endDate);
        jsStartDate.setHours((dateState === null || dateState === void 0 ? void 0 : (_dateState_startTime = dateState.startTime) === null || _dateState_startTime === void 0 ? void 0 : _dateState_startTime.hour) || 0);
        jsStartDate.setMinutes((dateState === null || dateState === void 0 ? void 0 : (_dateState_startTime1 = dateState.startTime) === null || _dateState_startTime1 === void 0 ? void 0 : _dateState_startTime1.minute) || 0);
        jsEndDate.setHours((dateState === null || dateState === void 0 ? void 0 : (_dateState_endTime = dateState.endTime) === null || _dateState_endTime === void 0 ? void 0 : _dateState_endTime.hour) || 0);
        jsEndDate.setMinutes((dateState === null || dateState === void 0 ? void 0 : (_dateState_endTime1 = dateState.endTime) === null || _dateState_endTime1 === void 0 ? void 0 : _dateState_endTime1.minute) || 0);
        if (jsEndDate < jsStartDate) {
            jsEndDate.setHours(jsStartDate.getHours() + 1);
        }
        setValue("startDate", jsStartDate);
        setValue("endDate", jsEndDate);
    }, [
        dateState,
        setValue
    ]);
    return /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("div", {
        className: "w-full flex gap-4 max-w-full flex-wrap"
    }, /* @__PURE__ */ React3.createElement(DateRangePicker, {
        label: "Stay duration",
        isRequired: true,
        value: {
            start: dateState.startDate,
            end: dateState.endDate
        },
        className: "w-full",
        onChange: function(value) {
            var start = value === null || value === void 0 ? void 0 : value.start;
            var end = value === null || value === void 0 ? void 0 : value.end;
            var startDate = new Date((start === null || start === void 0 ? void 0 : start.year) || 0, ((start === null || start === void 0 ? void 0 : start.month) || 1) - 1, (start === null || start === void 0 ? void 0 : start.day) || 1);
            var endDate = new Date((end === null || end === void 0 ? void 0 : end.year) || 0, ((end === null || end === void 0 ? void 0 : end.month) || 1) - 1, (end === null || end === void 0 ? void 0 : end.day) || 1);
            setDateState(_object_spread_props(_object_spread({}, dateState), {
                startDate: parseDate(getFormattedDate(startDate)),
                endDate: parseDate(getFormattedDate(endDate))
            }));
        }
    }), /* @__PURE__ */ React3.createElement("div", {
        className: "flex flex-wrap gap-4"
    }, /* @__PURE__ */ React3.createElement(TimeInput, {
        label: "Start Time",
        defaultValue: dateState === null || dateState === void 0 ? void 0 : dateState.startTime,
        onChange: function(e) {
            setDateState(_object_spread_props(_object_spread({}, dateState), {
                startTime: e
            }));
        }
    }), /* @__PURE__ */ React3.createElement(TimeInput, {
        label: "End Time",
        defaultValue: dateState === null || dateState === void 0 ? void 0 : dateState.endTime,
        onChange: function(e) {
            setDateState(_object_spread_props(_object_spread({}, dateState), {
                endTime: e
            }));
        },
        isInvalid: (dateState === null || dateState === void 0 ? void 0 : dateState.startTime) && (dateState === null || dateState === void 0 ? void 0 : dateState.endTime) && dateState.endTime.hour * 60 + dateState.endTime.minute <= dateState.startTime.hour * 60 + dateState.startTime.minute
    }))));
}
// components/schedule/_modals/add-event-modal.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// types/index.ts
import { z } from "zod";
var variants = [
    "success",
    "primary",
    "default",
    "warning",
    "danger"
];
var eventSchema = z.object({
    title: z.string().nonempty("Event name is required"),
    description: z.string().optional(),
    startDate: z.date(),
    endDate: z.date(),
    variant: z.enum([
        "primary",
        "danger",
        "success",
        "warning",
        "default"
    ]),
    color: z.string().nonempty("Color selection is required")
});
// components/schedule/_modals/add-event-modal.tsx
import { v4 as uuidv4 } from "uuid";
function AddEventModal(param) {
    var CustomAddEventModal = param.CustomAddEventModal;
    var _errors_title, _colorOptions_find;
    var _useModalContext = useModalContext(), onClose = _useModalContext.onClose, data = _useModalContext.data;
    var _useState3 = _sliced_to_array(useState3(getEventColor((data === null || data === void 0 ? void 0 : data.variant) || "primary")), 2), selectedColor = _useState3[0], setSelectedColor = _useState3[1];
    var typedData = data;
    var handlers = useScheduler().handlers;
    var _useForm = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            title: "",
            description: "",
            startDate: /* @__PURE__ */ new Date(),
            endDate: /* @__PURE__ */ new Date(),
            variant: (data === null || data === void 0 ? void 0 : data.variant) || "primary",
            color: (data === null || data === void 0 ? void 0 : data.color) || "blue"
        }
    }), register = _useForm.register, handleSubmit = _useForm.handleSubmit, reset = _useForm.reset, errors = _useForm.formState.errors, setValue = _useForm.setValue;
    useEffect2(function() {
        if (data) {
            reset({
                title: data.title,
                description: data.description || "",
                startDate: data.startDate,
                endDate: data.endDate,
                variant: data.variant || "primary",
                color: data.color || "blue"
            });
        }
    }, [
        data,
        reset
    ]);
    var colorOptions = [
        {
            key: "blue",
            name: "Blue"
        },
        {
            key: "red",
            name: "Red"
        },
        {
            key: "green",
            name: "Green"
        },
        {
            key: "yellow",
            name: "Yellow"
        }
    ];
    function getEventColor(variant) {
        switch(variant){
            case "primary":
                return "blue";
            case "danger":
                return "red";
            case "success":
                return "green";
            case "warning":
                return "yellow";
            default:
                return "blue";
        }
    }
    function getEventStatus(color) {
        switch(color){
            case "blue":
                return "primary";
            case "red":
                return "danger";
            case "green":
                return "success";
            case "yellow":
                return "warning";
            default:
                return "default";
        }
    }
    var onSubmit = function(formData) {
        var newEvent = {
            id: uuidv4(),
            // Generate a unique ID
            title: formData.title,
            startDate: formData.startDate,
            endDate: formData.endDate,
            variant: formData.variant,
            description: formData.description
        };
        if (!(typedData === null || typedData === void 0 ? void 0 : typedData.id)) handlers.handleAddEvent(newEvent);
        else handlers.handleUpdateEvent(newEvent, typedData.id);
        onClose();
    };
    return /* @__PURE__ */ React4.createElement("form", {
        className: "flex flex-col gap-3",
        onSubmit: handleSubmit(onSubmit)
    }, CustomAddEventModal ? CustomAddEventModal({
        register: register,
        errors: errors
    }) : /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(Input, _object_spread_props(_object_spread({}, register("title")), {
        label: "Event Name",
        placeholder: "Enter event name",
        variant: "bordered",
        isInvalid: !!errors.title,
        errorMessage: (_errors_title = errors.title) === null || _errors_title === void 0 ? void 0 : _errors_title.message
    })), /* @__PURE__ */ React4.createElement(Textarea, _object_spread_props(_object_spread({}, register("description")), {
        label: "Description",
        placeholder: "Enter event description",
        variant: "bordered"
    })), /* @__PURE__ */ React4.createElement(SelectDate, {
        data: data,
        setValue: setValue
    }), /* @__PURE__ */ React4.createElement(Dropdown, {
        backdrop: "blur"
    }, /* @__PURE__ */ React4.createElement(DropdownTrigger, null, /* @__PURE__ */ React4.createElement(Button, {
        variant: "flat",
        className: "justify-between w-fit my-4",
        color: getEventStatus(selectedColor)
    }, (_colorOptions_find = colorOptions.find(function(color) {
        return color.key === selectedColor;
    })) === null || _colorOptions_find === void 0 ? void 0 : _colorOptions_find.name)), /* @__PURE__ */ React4.createElement(DropdownMenu, {
        "aria-label": "Color selection",
        variant: "flat",
        selectionMode: "single",
        selectedKeys: [
            selectedColor
        ],
        onSelectionChange: function(keys) {
            var color = keys.currentKey || "blue";
            setSelectedColor(color);
            reset(function(formData) {
                return _object_spread_props(_object_spread({}, formData), {
                    variant: getEventStatus(color)
                });
            });
        }
    }, colorOptions.map(function(color) {
        return /* @__PURE__ */ React4.createElement(DropdownItem, {
            key: color.key,
            startContent: /* @__PURE__ */ React4.createElement("div", {
                className: "w-4 h-4 rounded-full bg-".concat(color.key, "-500")
            })
        }, color.name);
    }))), /* @__PURE__ */ React4.createElement(ModalFooter2, {
        className: "px-0"
    }, /* @__PURE__ */ React4.createElement(Button, {
        color: "danger",
        variant: "light",
        onPress: onClose
    }, "Cancel"), /* @__PURE__ */ React4.createElement(Button, {
        color: "primary",
        type: "submit"
    }, "Save Event"))));
}
// components/schedule/_components/view/day/daily-view.tsx
import React6, { useRef, useState as useState4 } from "react";
import { AnimatePresence, motion as motion2 } from "framer-motion";
import { Button as Button2 } from "@nextui-org/button";
import { Chip as Chip2 } from "@nextui-org/chip";
import { ArrowLeft, ArrowRight } from "lucide-react";
// components/schedule/_components/view/event-component/event-styled.tsx
import React5 from "react";
import { Chip } from "@nextui-org/chip";
import { TrashIcon } from "lucide-react";
import { motion } from "framer-motion";
var formatDate = function(date) {
    return date.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
};
function EventStyled(param) {
    var event = param.event, CustomEventModal = param.CustomEventModal;
    var _useModalContext = useModalContext(), showEventModal = _useModalContext.showModal;
    var handlers = useScheduler().handlers;
    function handleEditEvent(event2) {
        var _CustomEventModal_CustomAddEventModal;
        showEventModal({
            title: event2 === null || event2 === void 0 ? void 0 : event2.title,
            body: /* @__PURE__ */ React5.createElement(AddEventModal, {
                CustomAddEventModal: CustomEventModal === null || CustomEventModal === void 0 ? void 0 : (_CustomEventModal_CustomAddEventModal = CustomEventModal.CustomAddEventModal) === null || _CustomEventModal_CustomAddEventModal === void 0 ? void 0 : _CustomEventModal_CustomAddEventModal.CustomForm
            }),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        _object_spread({}, event2)
                    ];
                });
            })
        });
    }
    return /* @__PURE__ */ React5.createElement(motion.div, {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.9
        },
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        },
        key: event === null || event === void 0 ? void 0 : event.id,
        className: "w-full relative use-automation-zoom-in cursor-pointer border border-default-400/60 rounded-lg  flex flex-col flex-grow "
    }, /* @__PURE__ */ React5.createElement(Chip, {
        onClickCapture: function(e) {
            e.stopPropagation();
            handlers.handleDeleteEvent(event === null || event === void 0 ? void 0 : event.id);
        },
        color: "danger",
        variant: "solid",
        classNames: {
            content: "max-w-fit min-w-0 p-1"
        },
        className: "absolute z-50 right-0 top-[-5px]"
    }, /* @__PURE__ */ React5.createElement(TrashIcon, {
        size: 12
    })), event.CustomEventComponent ? /* @__PURE__ */ React5.createElement("div", {
        onClickCapture: function(e) {
            e.stopPropagation();
            handleEditEvent({
                id: event === null || event === void 0 ? void 0 : event.id,
                title: event === null || event === void 0 ? void 0 : event.title,
                startDate: event === null || event === void 0 ? void 0 : event.startDate,
                endDate: event === null || event === void 0 ? void 0 : event.endDate,
                description: event === null || event === void 0 ? void 0 : event.description,
                variant: event === null || event === void 0 ? void 0 : event.variant
            });
        }
    }, /* @__PURE__ */ React5.createElement(event.CustomEventComponent, _object_spread({}, event))) : /* @__PURE__ */ React5.createElement(Chip, {
        onClickCapture: function(e) {
            e.stopPropagation();
            handleEditEvent({
                id: event === null || event === void 0 ? void 0 : event.id,
                title: event === null || event === void 0 ? void 0 : event.title,
                startDate: event === null || event === void 0 ? void 0 : event.startDate,
                endDate: event === null || event === void 0 ? void 0 : event.endDate,
                description: event === null || event === void 0 ? void 0 : event.description,
                variant: event === null || event === void 0 ? void 0 : event.variant
            });
        },
        variant: "flat",
        color: event === null || event === void 0 ? void 0 : event.variant,
        classNames: {
            content: "p-0"
        },
        className: "min-w-full items-start p-0 flex-grow flex-col flex ".concat((event === null || event === void 0 ? void 0 : event.minmized) ? "h-full" : "min-h-fit p-1", " rounded-md")
    }, /* @__PURE__ */ React5.createElement("div", {
        className: "flex ".concat((event === null || event === void 0 ? void 0 : event.minmized) ? "p-0" : "p-1", " flex-col flex-grow px-1 rounded-md  items-start w-full")
    }, /* @__PURE__ */ React5.createElement("h1", {
        className: "".concat((event === null || event === void 0 ? void 0 : event.minmized) && "text-[0.7rem] p-0 px-1", " font-semibold line-clamp-1")
    }, event === null || event === void 0 ? void 0 : event.title), /* @__PURE__ */ React5.createElement("p", {
        className: "text-[0.65rem]"
    }, event === null || event === void 0 ? void 0 : event.description), !(event === null || event === void 0 ? void 0 : event.minmized) && /* @__PURE__ */ React5.createElement("div", {
        className: "flex justify-between w-full"
    }, /* @__PURE__ */ React5.createElement("p", {
        className: "text-sm"
    }, formatDate(event === null || event === void 0 ? void 0 : event.startDate)), /* @__PURE__ */ React5.createElement("p", {
        className: "text-sm"
    }, "-"), /* @__PURE__ */ React5.createElement("p", {
        className: "text-sm"
    }, formatDate(event === null || event === void 0 ? void 0 : event.endDate))))));
}
// components/schedule/_components/view/day/daily-view.tsx
var hours = Array.from({
    length: 24
}, function(_, i) {
    return "".concat(i.toString().padStart(2, "0"), ":00");
});
var containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};
var itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    }
};
function DailyView(param) {
    var prevButton = param.prevButton, nextButton = param.nextButton, CustomEventComponent = param.CustomEventComponent, CustomEventModal = param.CustomEventModal, classNames = param.classNames;
    var hoursColumnRef = useRef(null);
    var _useState4 = _sliced_to_array(useState4(null), 2), detailedHour = _useState4[0], setDetailedHour = _useState4[1];
    var _useState41 = _sliced_to_array(useState4(0), 2), timelinePosition = _useState41[0], setTimelinePosition = _useState41[1];
    var _useState42 = _sliced_to_array(useState4(/* @__PURE__ */ new Date()), 2), currentDate = _useState42[0], setCurrentDate = _useState42[1];
    var showModal = useModalContext().showModal;
    var _useScheduler = useScheduler(), getters = _useScheduler.getters, handlers = _useScheduler.handlers;
    var handleMouseMove = function(e) {
        if (!hoursColumnRef.current) return;
        var rect = hoursColumnRef.current.getBoundingClientRect();
        var y = e.clientY - rect.top;
        var hourHeight = rect.height / 24;
        var hour = Math.max(0, Math.min(23, Math.floor(y / hourHeight)));
        var minuteFraction = y % hourHeight / hourHeight;
        var minutes = Math.floor(minuteFraction * 60);
        setDetailedHour("".concat(hour.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0")));
        setTimelinePosition(y);
    };
    var getFormattedDayTitle = function() {
        return currentDate.toDateString();
    };
    var dayEvents = getters.getEventsForDay((currentDate === null || currentDate === void 0 ? void 0 : currentDate.getDate()) || 0, currentDate);
    function handleAddEvent(event) {
        var _CustomEventModal_CustomAddEventModal, _CustomEventModal_CustomAddEventModal1;
        showModal({
            title: (CustomEventModal === null || CustomEventModal === void 0 ? void 0 : (_CustomEventModal_CustomAddEventModal = CustomEventModal.CustomAddEventModal) === null || _CustomEventModal_CustomAddEventModal === void 0 ? void 0 : _CustomEventModal_CustomAddEventModal.title) || "Add Event",
            body: /* @__PURE__ */ React6.createElement(AddEventModal, {
                CustomAddEventModal: CustomEventModal === null || CustomEventModal === void 0 ? void 0 : (_CustomEventModal_CustomAddEventModal1 = CustomEventModal.CustomAddEventModal) === null || _CustomEventModal_CustomAddEventModal1 === void 0 ? void 0 : _CustomEventModal_CustomAddEventModal1.CustomForm
            }),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = (event === null || event === void 0 ? void 0 : event.startDate) || /* @__PURE__ */ new Date();
                    endDate = (event === null || event === void 0 ? void 0 : event.endDate) || /* @__PURE__ */ new Date();
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    function handleAddEventDay(detailedHour2) {
        if (!detailedHour2) {
            console.error("Detailed hour not provided.");
            return;
        }
        var _detailedHour2_split_map = _sliced_to_array(detailedHour2.split(":").map(Number), 2), hours3 = _detailedHour2_split_map[0], minutes = _detailedHour2_split_map[1];
        var chosenDay = currentDate.getDate();
        if (chosenDay < 1 || chosenDay > 31) {
            console.error("Invalid day selected:", chosenDay);
            return;
        }
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), chosenDay, hours3, minutes);
        handleAddEvent({
            startDate: date,
            endDate: new Date(date.getTime() + 60 * 60 * 1e3),
            // 1-hour duration
            title: "",
            id: "",
            variant: "primary"
        });
    }
    var handleNextDay = function() {
        var nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        setCurrentDate(nextDay);
    };
    var handlePrevDay = function() {
        var prevDay = new Date(currentDate);
        prevDay.setDate(currentDate.getDate() - 1);
        setCurrentDate(prevDay);
    };
    return /* @__PURE__ */ React6.createElement("div", {
        className: ""
    }, /* @__PURE__ */ React6.createElement("div", {
        className: "flex justify-between gap-3 flex-wrap mb-5"
    }, /* @__PURE__ */ React6.createElement("h1", {
        className: "text-3xl font-semibold mb-4"
    }, getFormattedDayTitle()), /* @__PURE__ */ React6.createElement("div", {
        className: "flex ml-auto gap-3"
    }, prevButton ? /* @__PURE__ */ React6.createElement("div", {
        onClick: handlePrevDay
    }, prevButton) : /* @__PURE__ */ React6.createElement(Button2, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.prev,
        startContent: /* @__PURE__ */ React6.createElement(ArrowLeft, null),
        onClick: handlePrevDay
    }, "Prev"), nextButton ? /* @__PURE__ */ React6.createElement("div", {
        onClick: handleNextDay
    }, nextButton) : /* @__PURE__ */ React6.createElement(Button2, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.next,
        onClick: handleNextDay,
        endContent: /* @__PURE__ */ React6.createElement(ArrowRight, null)
    }, "Next"))), /* @__PURE__ */ React6.createElement("div", {
        className: "flex flex-col gap-4"
    }, /* @__PURE__ */ React6.createElement("div", {
        className: "all-day-events"
    }, /* @__PURE__ */ React6.createElement(AnimatePresence, {
        mode: "wait"
    }, dayEvents && (dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.length) ? dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.map(function(event, eventIndex) {
        return /* @__PURE__ */ React6.createElement("div", {
            key: "event-".concat(event.id, "-").concat(eventIndex)
        }, /* @__PURE__ */ React6.createElement(EventStyled, {
            event: _object_spread_props(_object_spread({}, event), {
                CustomEventComponent: CustomEventComponent,
                minmized: false
            }),
            CustomEventModal: CustomEventModal
        }));
    }) : "No events for today")), /* @__PURE__ */ React6.createElement("div", {
        className: "relative rounded-md bg-default-50 hover:bg-default-100 transition duration-400"
    }, /* @__PURE__ */ React6.createElement(motion2.div, {
        className: "relative rounded-xl flex ease-in-out",
        ref: hoursColumnRef,
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        onMouseMove: handleMouseMove,
        onMouseLeave: function() {
            return setDetailedHour(null);
        }
    }, /* @__PURE__ */ React6.createElement("div", {
        className: "flex  flex-col"
    }, hours.map(function(hour, index) {
        return /* @__PURE__ */ React6.createElement(motion2.div, {
            key: "hour-".concat(index),
            variants: itemVariants,
            className: "cursor-pointer   transition duration-300  p-4 h-[64px] text-left text-sm text-muted-foreground border-default-200"
        }, hour);
    })), /* @__PURE__ */ React6.createElement("div", {
        className: "flex relative flex-grow flex-col "
    }, Array.from({
        length: 24
    }).map(function(_, index) {
        return /* @__PURE__ */ React6.createElement("div", {
            onClick: function() {
                handleAddEventDay(detailedHour);
            },
            key: "hour-".concat(index),
            className: "cursor-pointer w-full relative border-b  hover:bg-default-200/50  transition duration-300  p-4 h-[64px] text-left text-sm text-muted-foreground border-default-200"
        }, /* @__PURE__ */ React6.createElement("div", {
            className: "absolute bg-default-200 flex items-center justify-center text-xs opacity-0 transition left-0 top-0 duration-250 hover:opacity-100 w-full h-full"
        }, "Add Event"));
    }), /* @__PURE__ */ React6.createElement(AnimatePresence, {
        mode: "wait"
    }, dayEvents && (dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.length) ? dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.map(function(event, eventIndex) {
        var _handlers_handleEventStyling = handlers.handleEventStyling(event, dayEvents), height = _handlers_handleEventStyling.height, left = _handlers_handleEventStyling.left, maxWidth = _handlers_handleEventStyling.maxWidth, minWidth = _handlers_handleEventStyling.minWidth, top = _handlers_handleEventStyling.top, zIndex = _handlers_handleEventStyling.zIndex;
        return /* @__PURE__ */ React6.createElement("div", {
            key: "event-".concat(event.id, "-").concat(eventIndex),
            style: {
                minHeight: height,
                top: top,
                left: left,
                maxWidth: maxWidth,
                minWidth: minWidth
            },
            className: "flex transition-all duration-1000 flex-grow flex-col z-50 absolute"
        }, /* @__PURE__ */ React6.createElement(EventStyled, {
            event: _object_spread_props(_object_spread({}, event), {
                CustomEventComponent: CustomEventComponent,
                minmized: true
            }),
            CustomEventModal: CustomEventModal
        }));
    }) : ""))), detailedHour && /* @__PURE__ */ React6.createElement("div", {
        className: "absolute left-[50px] w-[calc(100%-53px)] h-[3px]  bg-primary-300 dark:bg-primary/30 rounded-full pointer-events-none",
        style: {
            top: "".concat(timelinePosition, "px")
        }
    }, /* @__PURE__ */ React6.createElement(Chip2, {
        color: "success",
        variant: "flat",
        className: "absolute vertical-abs-center z-50 left-[-55px] text-xs uppercase"
    }, detailedHour)))));
}
// components/schedule/_components/view/month/month-view.tsx
import React8, { useState as useState5 } from "react";
import { AnimatePresence as AnimatePresence2, motion as motion3 } from "framer-motion";
import { Button as Button3 } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Chip as Chip3 } from "@nextui-org/chip";
import { ArrowLeft as ArrowLeft2, ArrowRight as ArrowRight2 } from "lucide-react";
import clsx from "clsx";
// components/schedule/_modals/show-more-events-modal.tsx
import React7 from "react";
function ShowMoreEventsModal() {
    var data = useModalContext().data;
    var dayEvents = (data === null || data === void 0 ? void 0 : data.dayEvents) || [];
    return /* @__PURE__ */ React7.createElement("div", {
        className: "flex flex-col gap-2"
    }, dayEvents.map(function(event) {
        return /* @__PURE__ */ React7.createElement(EventStyled, {
            key: event.id,
            event: _object_spread({}, event)
        });
    }));
}
// components/schedule/_components/view/month/month-view.tsx
function MonthView(param) {
    var prevButton = param.prevButton, nextButton = param.nextButton, CustomEventComponent = param.CustomEventComponent, CustomEventModal = param.CustomEventModal, classNames = param.classNames;
    var _useScheduler = useScheduler(), getters = _useScheduler.getters, weekStartsOn = _useScheduler.weekStartsOn;
    var showModal = useModalContext().showModal;
    var _useState5 = _sliced_to_array(useState5(/* @__PURE__ */ new Date()), 2), currentDate = _useState5[0], setCurrentDate = _useState5[1];
    var daysInMonth = getters.getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    var handlePrevMonth = function() {
        var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(newDate);
    };
    var handleNextMonth = function() {
        var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(newDate);
    };
    function handleAddEvent(selectedDay) {
        showModal({
            title: "Add Event",
            body: /* @__PURE__ */ React8.createElement(AddEventModal, null),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : 1, 0, 0, 0, 0);
                    endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : 1, 23, 59, 59, 999);
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    function handleShowMoreEvents(dayEvents) {
        var _dayEvents_;
        showModal({
            title: dayEvents && ((_dayEvents_ = dayEvents[0]) === null || _dayEvents_ === void 0 ? void 0 : _dayEvents_.startDate.toDateString()),
            body: /* @__PURE__ */ React8.createElement(ShowMoreEventsModal, null),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        {
                            dayEvents: dayEvents
                        }
                    ];
                });
            })
        });
    }
    var containerVariants3 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02
            }
        }
    };
    var itemVariants2 = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };
    var daysOfWeek = weekStartsOn === "monday" ? [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ] : [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    var startOffset = (firstDayOfMonth.getDay() - (weekStartsOn === "monday" ? 1 : 0) + 7) % 7;
    var prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    var lastDateOfPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();
    return /* @__PURE__ */ React8.createElement("div", null, /* @__PURE__ */ React8.createElement("div", {
        className: "flex flex-col mb-4"
    }, /* @__PURE__ */ React8.createElement(motion3.h2, {
        key: currentDate.getMonth(),
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 1
        },
        className: "text-3xl my-5 tracking-tighter font-bold"
    }, currentDate.toLocaleString("default", {
        month: "long"
    }), " ", currentDate.getFullYear()), /* @__PURE__ */ React8.createElement("div", {
        className: "flex gap-3"
    }, prevButton ? /* @__PURE__ */ React8.createElement("div", {
        onClick: handlePrevMonth
    }, prevButton) : /* @__PURE__ */ React8.createElement(Button3, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.prev,
        startContent: /* @__PURE__ */ React8.createElement(ArrowLeft2, null),
        onClick: handlePrevMonth
    }, "Prev"), nextButton ? /* @__PURE__ */ React8.createElement("div", {
        onClick: handleNextMonth
    }, nextButton) : /* @__PURE__ */ React8.createElement(Button3, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.next,
        onClick: handleNextMonth,
        endContent: /* @__PURE__ */ React8.createElement(ArrowRight2, null)
    }, "Next"))), /* @__PURE__ */ React8.createElement(AnimatePresence2, {
        mode: "wait"
    }, /* @__PURE__ */ React8.createElement(motion3.div, {
        variants: containerVariants3,
        initial: "hidden",
        animate: "visible",
        key: currentDate.getMonth(),
        className: "grid grid-cols-7 gap-1 sm:gap-2"
    }, daysOfWeek.map(function(day, idx) {
        return /* @__PURE__ */ React8.createElement("div", {
            key: idx,
            className: "text-left my-8 text-4xl tracking-tighter font-medium"
        }, day);
    }), Array.from({
        length: startOffset
    }).map(function(_, idx) {
        return /* @__PURE__ */ React8.createElement("div", {
            key: "offset-".concat(idx),
            className: "h-[150px] opacity-50"
        }, /* @__PURE__ */ React8.createElement("div", {
            className: clsx("font-semibold relative text-3xl mb-1")
        }, lastDateOfPrevMonth - startOffset + idx + 1));
    }), daysInMonth.map(function(dayObj) {
        var dayEvents = getters.getEventsForDay(dayObj.day, currentDate);
        return /* @__PURE__ */ React8.createElement(motion3.div, {
            className: "hover:z-50 border-none h-[150px] rounded group flex flex-col",
            key: dayObj.day,
            variants: itemVariants2
        }, /* @__PURE__ */ React8.createElement(Card, {
            isPressable: true,
            className: "shadow-md  relative flex p-4 border border-default-100 h-full",
            onClick: function() {
                return handleAddEvent(dayObj.day);
            }
        }, /* @__PURE__ */ React8.createElement("div", {
            className: clsx("font-semibold relative text-3xl mb-1", dayEvents.length > 0 ? "text-primary-600" : "text-muted-foreground", /* @__PURE__ */ new Date().getDate() === dayObj.day && /* @__PURE__ */ new Date().getMonth() === currentDate.getMonth() && /* @__PURE__ */ new Date().getFullYear() === currentDate.getFullYear() ? "text-secondary-500" : "")
        }, dayObj.day), /* @__PURE__ */ React8.createElement("div", {
            className: "flex-grow flex flex-col gap-2 w-full overflow-hidden"
        }, /* @__PURE__ */ React8.createElement(AnimatePresence2, {
            mode: "wait"
        }, (dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.length) > 0 && /* @__PURE__ */ React8.createElement(EventStyled, {
            event: _object_spread_props(_object_spread({}, dayEvents[0]), {
                CustomEventComponent: CustomEventComponent,
                minmized: true
            }),
            CustomEventModal: CustomEventModal
        })), dayEvents.length > 1 && /* @__PURE__ */ React8.createElement(Chip3, {
            onClick: function(e) {
                e.stopPropagation();
                handleShowMoreEvents(dayEvents);
            },
            variant: "flat",
            className: "hover:bg-default-200 absolute right-2 text-xs top-2 transition duration-300"
        }, dayEvents.length > 1 ? "+".concat(dayEvents.length - 1) : " ")), dayEvents.length === 0 && /* @__PURE__ */ React8.createElement("div", {
            className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, /* @__PURE__ */ React8.createElement("span", {
            className: "text-white tracking-tighter text-lg font-semibold"
        }, "Add Event"))));
    }))));
}
// components/schedule/_components/view/week/week-view.tsx
import React9, { useRef as useRef2, useState as useState6 } from "react";
import { Chip as Chip4 } from "@nextui-org/chip";
import { AnimatePresence as AnimatePresence3, motion as motion4 } from "framer-motion";
import { Button as Button4 } from "@nextui-org/button";
import { ArrowLeft as ArrowLeft3, ArrowRight as ArrowRight3 } from "lucide-react";
import clsx2 from "clsx";
var hours2 = Array.from({
    length: 24
}, function(_, i) {
    return "".concat(i.toString().padStart(2, "0"), ":00");
});
var containerVariants2 = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
function WeeklyView(param) {
    var prevButton = param.prevButton, nextButton = param.nextButton, CustomEventComponent = param.CustomEventComponent, CustomEventModal = param.CustomEventModal, classNames = param.classNames;
    var _useScheduler = useScheduler(), getters = _useScheduler.getters, handlers = _useScheduler.handlers;
    var hoursColumnRef = useRef2(null);
    var _useState6 = _sliced_to_array(useState6(null), 2), detailedHour = _useState6[0], setDetailedHour = _useState6[1];
    var _useState61 = _sliced_to_array(useState6(0), 2), timelinePosition = _useState61[0], setTimelinePosition = _useState61[1];
    var _useState62 = _sliced_to_array(useState6(/* @__PURE__ */ new Date()), 2), currentDate = _useState62[0], setCurrentDate = _useState62[1];
    var showModal = useModalContext().showModal;
    var daysOfWeek = getters === null || getters === void 0 ? void 0 : getters.getDaysInWeek(getters === null || getters === void 0 ? void 0 : getters.getWeekNumber(currentDate), currentDate.getFullYear());
    var handleMouseMove = function(e) {
        if (!hoursColumnRef.current) return;
        var rect = hoursColumnRef.current.getBoundingClientRect();
        var y = e.clientY - rect.top;
        var hourHeight = rect.height / 24;
        var hour = Math.max(0, Math.min(23, Math.floor(y / hourHeight)));
        var minuteFraction = y % hourHeight / hourHeight;
        var minutes = Math.floor(minuteFraction * 60);
        setDetailedHour("".concat(hour.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0")));
        setTimelinePosition(y + 83);
    };
    function handleAddEvent(event) {
        showModal({
            title: "Add Event",
            body: /* @__PURE__ */ React9.createElement(AddEventModal, null),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = (event === null || event === void 0 ? void 0 : event.startDate) || /* @__PURE__ */ new Date();
                    endDate = (event === null || event === void 0 ? void 0 : event.endDate) || /* @__PURE__ */ new Date();
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    var handleNextWeek = function() {
        var nextWeek = new Date(currentDate);
        nextWeek.setDate(currentDate.getDate() + 7);
        setCurrentDate(nextWeek);
    };
    var handlePrevWeek = function() {
        var prevWeek = new Date(currentDate);
        prevWeek.setDate(currentDate.getDate() - 7);
        setCurrentDate(prevWeek);
    };
    function handleAddEventWeek(dayIndex, detailedHour2) {
        if (!detailedHour2) {
            console.error("Detailed hour not provided.");
            return;
        }
        var _detailedHour2_split_map = _sliced_to_array(detailedHour2.split(":").map(Number), 2), hours3 = _detailedHour2_split_map[0], minutes = _detailedHour2_split_map[1];
        var chosenDay = daysOfWeek[dayIndex % 7].getDate();
        if (chosenDay < 1 || chosenDay > 31) {
            console.error("Invalid day selected:", chosenDay);
            return;
        }
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), chosenDay, hours3, minutes);
        handleAddEvent({
            startDate: date,
            endDate: new Date(date.getTime() + 60 * 60 * 1e3),
            // 1-hour duration
            title: "",
            id: "",
            variant: "primary"
        });
    }
    return /* @__PURE__ */ React9.createElement("div", {
        className: "flex flex-col gap-4"
    }, /* @__PURE__ */ React9.createElement(motion4.div, {
        key: currentDate.toDateString() + "parent",
        className: "all-week-events flex flex-col gap-2",
        variants: containerVariants2,
        initial: "hidden",
        animate: "visible"
    }), /* @__PURE__ */ React9.createElement("div", {
        className: "flex ml-auto gap-3"
    }, prevButton ? /* @__PURE__ */ React9.createElement("div", {
        onClick: handlePrevWeek
    }, prevButton) : /* @__PURE__ */ React9.createElement(Button4, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.prev,
        startContent: /* @__PURE__ */ React9.createElement(ArrowLeft3, null),
        onClick: handlePrevWeek
    }, "Prev"), nextButton ? /* @__PURE__ */ React9.createElement("div", {
        onClick: handleNextWeek
    }, nextButton) : /* @__PURE__ */ React9.createElement(Button4, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.next,
        onClick: handleNextWeek,
        endContent: /* @__PURE__ */ React9.createElement(ArrowRight3, null)
    }, "Next")), /* @__PURE__ */ React9.createElement("div", {
        key: currentDate.toDateString(),
        className: "grid use-automation-zoom-in grid-cols-8 gap-0"
    }, /* @__PURE__ */ React9.createElement("div", {
        className: "sticky top-0 left-0 z-30 bg-default-100 rounded-tl-lg h-full border-0  flex items-center justify-center"
    }, /* @__PURE__ */ React9.createElement("span", {
        className: "text-lg font-semibold text-muted-foreground"
    }, "Week ", getters.getWeekNumber(currentDate))), /* @__PURE__ */ React9.createElement("div", {
        className: "col-span-7 flex flex-col relative"
    }, /* @__PURE__ */ React9.createElement("div", {
        className: "grid grid-cols-7 gap-0 flex-grow"
    }, daysOfWeek.map(function(day, idx) {
        return /* @__PURE__ */ React9.createElement("div", {
            key: idx,
            className: "relative flex flex-col"
        }, /* @__PURE__ */ React9.createElement("div", {
            className: "sticky bg-default-100 top-0 z-20 flex-grow flex items-center justify-center"
        }, /* @__PURE__ */ React9.createElement("div", {
            className: "text-center p-4"
        }, /* @__PURE__ */ React9.createElement("div", {
            className: "text-lg font-semibold"
        }, getters.getDayName(day.getDay())), /* @__PURE__ */ React9.createElement("div", {
            className: clsx2("text-lg font-semibold", /* @__PURE__ */ new Date().getDate() === day.getDate() && /* @__PURE__ */ new Date().getMonth() === currentDate.getMonth() && /* @__PURE__ */ new Date().getFullYear() === currentDate.getFullYear() ? "text-secondary-500" : "")
        }, day.getDate()))), /* @__PURE__ */ React9.createElement("div", {
            className: "absolute top-12 right-0 w-px h-[calc(100%-3rem)]"
        }));
    })), detailedHour && /* @__PURE__ */ React9.createElement("div", {
        className: "absolute flex z-10 left-0 w-full h-[3px] bg-primary-300 dark:bg-primary/30 rounded-full pointer-events-none",
        style: {
            top: "".concat(timelinePosition, "px")
        }
    }, /* @__PURE__ */ React9.createElement(Chip4, {
        color: "success",
        variant: "flat",
        className: "absolute vertical-abs-center z-50 left-[-55px] text-xs uppercase"
    }, detailedHour))), /* @__PURE__ */ React9.createElement("div", {
        ref: hoursColumnRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: function() {
            return setDetailedHour(null);
        },
        className: "relative grid grid-cols-8 col-span-8"
    }, /* @__PURE__ */ React9.createElement("div", {
        className: "col-span-1 bg-default-50 hover:bg-default-100 transition duration-400"
    }, hours2.map(function(hour, index) {
        return /* @__PURE__ */ React9.createElement("div", {
            key: "hour-".concat(index),
            className: "cursor-pointer border-b border-default-200 p-[16px] h-[64px] text-center text-sm text-muted-foreground border-r"
        }, hour);
    })), /* @__PURE__ */ React9.createElement("div", {
        className: "col-span-7 bg-default-50 grid h-full grid-cols-7"
    }, Array.from({
        length: 7
    }, function(_, dayIndex) {
        var dayEvents = getters.getEventsForDay(daysOfWeek[dayIndex % 7].getDate(), currentDate);
        return /* @__PURE__ */ React9.createElement("div", {
            key: "day-".concat(dayIndex),
            className: "col-span-1  border-default-200 z-20 relative transition duration-300 cursor-pointer border-r border-b text-center text-sm text-muted-foreground",
            onClick: function() {
                handleAddEventWeek(dayIndex, detailedHour);
            }
        }, /* @__PURE__ */ React9.createElement(AnimatePresence3, {
            mode: "wait"
        }, dayEvents === null || dayEvents === void 0 ? void 0 : dayEvents.map(function(event, eventIndex) {
            var _handlers_handleEventStyling = handlers.handleEventStyling(event, dayEvents), height = _handlers_handleEventStyling.height, left = _handlers_handleEventStyling.left, maxWidth = _handlers_handleEventStyling.maxWidth, minWidth = _handlers_handleEventStyling.minWidth, top = _handlers_handleEventStyling.top, zIndex = _handlers_handleEventStyling.zIndex;
            return /* @__PURE__ */ React9.createElement("div", {
                key: "event-".concat(event.id, "-").concat(eventIndex),
                style: {
                    minHeight: height,
                    height: height,
                    top: top,
                    left: left,
                    maxWidth: maxWidth,
                    minWidth: minWidth
                },
                className: "flex transitio transition-all duration-1000 flex-grow flex-col z-50 absolute"
            }, /* @__PURE__ */ React9.createElement(EventStyled, {
                event: _object_spread_props(_object_spread({}, event), {
                    CustomEventComponent: CustomEventComponent,
                    minmized: true
                }),
                CustomEventModal: CustomEventModal
            }));
        })), Array.from({
            length: 24
        }, function(_2, hourIndex) {
            return /* @__PURE__ */ React9.createElement("div", {
                key: "day-".concat(dayIndex, "-hour-").concat(hourIndex),
                className: "col-span-1 border-default-200 h-16 z-20 relative transition duration-300 cursor-pointer border-r border-b text-center text-sm text-muted-foreground"
            }, /* @__PURE__ */ React9.createElement("div", {
                className: "absolute bg-default-100 flex items-center justify-center text-xs opacity-0 transition duration-250 hover:opacity-100 w-full h-full"
            }, "Add Event"));
        }));
    })))));
}
// components/schedule/_components/view/schedular-view-filteration.tsx
var animationConfig = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -20
    },
    transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 250
    }
};
function SchedulerViewFilteration(param) {
    var _param_views = param.views, views = _param_views === void 0 ? {
        views: [
            "day",
            "week",
            "month"
        ],
        mobileViews: [
            "day"
        ]
    } : _param_views, CustomComponents = param.CustomComponents, classNames = param.classNames;
    var _CustomComponents_customTabs, _CustomComponents_customButtons, _CustomComponents_customButtons1, _CustomComponents_customTabs1, _CustomComponents_customButtons2, _CustomComponents_customButtons3, _CustomComponents_customTabs2, _CustomComponents_customButtons4, _CustomComponents_customButtons5, // Add custom button
    _CustomComponents_customButtons6, _classNames_buttons;
    var _useModalContext = useModalContext(), showAddEventModal = _useModalContext.showModal;
    var _React10_useState = _sliced_to_array(React10.useState(false), 2), clientSide = _React10_useState[0], setClientSide = _React10_useState[1];
    useEffect3(function() {
        setClientSide(true);
    }, []);
    var _React10_useState1 = _sliced_to_array(React10.useState(clientSide ? window.innerWidth <= 768 : false), 2), isMobile = _React10_useState1[0], setIsMobile = _React10_useState1[1];
    useEffect3(function() {
        var handleResize = function handleResize() {
            if (window && window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        if (!clientSide) return;
        setIsMobile(window.innerWidth <= 768);
        window && window.addEventListener("resize", handleResize);
        return function() {
            return window && window.removeEventListener("resize", handleResize);
        };
    }, [
        clientSide
    ]);
    function handleAddEvent(selectedDay) {
        var _CustomComponents_CustomEventModal_CustomAddEventModal, _CustomComponents_CustomEventModal, _CustomComponents_CustomEventModal_CustomAddEventModal1, _CustomComponents_CustomEventModal1;
        showAddEventModal({
            title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_CustomEventModal = CustomComponents.CustomEventModal) === null || _CustomComponents_CustomEventModal === void 0 ? void 0 : (_CustomComponents_CustomEventModal_CustomAddEventModal = _CustomComponents_CustomEventModal.CustomAddEventModal) === null || _CustomComponents_CustomEventModal_CustomAddEventModal === void 0 ? void 0 : _CustomComponents_CustomEventModal_CustomAddEventModal.title) || "Add Event",
            body: /* @__PURE__ */ React10.createElement(AddEventModal, {
                CustomAddEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_CustomEventModal1 = CustomComponents.CustomEventModal) === null || _CustomComponents_CustomEventModal1 === void 0 ? void 0 : (_CustomComponents_CustomEventModal_CustomAddEventModal1 = _CustomComponents_CustomEventModal1.CustomAddEventModal) === null || _CustomComponents_CustomEventModal_CustomAddEventModal1 === void 0 ? void 0 : _CustomComponents_CustomEventModal_CustomAddEventModal1.CustomForm
            }),
            getter: /*#__PURE__*/ _async_to_generator(function() {
                var startDate, endDate;
                return _ts_generator(this, function(_state) {
                    startDate = new Date(/* @__PURE__ */ new Date().getFullYear(), /* @__PURE__ */ new Date().getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : // current day
                    /* @__PURE__ */ new Date().getDate(), 0, 0, 0, 0);
                    endDate = new Date(/* @__PURE__ */ new Date().getFullYear(), /* @__PURE__ */ new Date().getMonth(), selectedDay !== null && selectedDay !== void 0 ? selectedDay : // current day
                    /* @__PURE__ */ new Date().getDate(), 23, 59, 59, 999);
                    return [
                        2,
                        {
                            startDate: startDate,
                            endDate: endDate
                        }
                    ];
                });
            })
        });
    }
    var viewsSelector = isMobile ? views === null || views === void 0 ? void 0 : views.mobileViews : views === null || views === void 0 ? void 0 : views.views;
    return /* @__PURE__ */ React10.createElement("div", {
        className: "flex w-full flex-col"
    }, /* @__PURE__ */ React10.createElement("div", {
        className: "flex w-full"
    }, /* @__PURE__ */ React10.createElement("div", {
        className: "dayly-weekly-monthly-selection relative w-full"
    }, /* @__PURE__ */ React10.createElement(Tabs, {
        classNames: _object_spread({}, classNames === null || classNames === void 0 ? void 0 : classNames.tabs),
        "aria-label": "Options",
        color: "primary",
        variant: "solid"
    }, (viewsSelector === null || viewsSelector === void 0 ? void 0 : viewsSelector.includes("day")) && /* @__PURE__ */ React10.createElement(Tab, {
        key: "day",
        title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customTabs = CustomComponents.customTabs) === null || _CustomComponents_customTabs === void 0 ? void 0 : _CustomComponents_customTabs.CustomDayTab) ? CustomComponents.customTabs.CustomDayTab : /* @__PURE__ */ React10.createElement("div", {
            className: "flex items-center space-x-2"
        }, /* @__PURE__ */ React10.createElement(CalendarDaysIcon, {
            size: 15
        }), /* @__PURE__ */ React10.createElement("span", null, "Day"))
    }, /* @__PURE__ */ React10.createElement(motion5.div, _object_spread({}, animationConfig), /* @__PURE__ */ React10.createElement(DailyView, {
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.buttons,
        prevButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons = CustomComponents.customButtons) === null || _CustomComponents_customButtons === void 0 ? void 0 : _CustomComponents_customButtons.CustomPrevButton,
        nextButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons1 = CustomComponents.customButtons) === null || _CustomComponents_customButtons1 === void 0 ? void 0 : _CustomComponents_customButtons1.CustomNextButton,
        CustomEventComponent: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventComponent,
        CustomEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventModal
    }))), (viewsSelector === null || viewsSelector === void 0 ? void 0 : viewsSelector.includes("week")) && /* @__PURE__ */ React10.createElement(Tab, {
        key: "week",
        title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customTabs1 = CustomComponents.customTabs) === null || _CustomComponents_customTabs1 === void 0 ? void 0 : _CustomComponents_customTabs1.CustomWeekTab) ? CustomComponents.customTabs.CustomWeekTab : /* @__PURE__ */ React10.createElement("div", {
            className: "flex items-center space-x-2"
        }, /* @__PURE__ */ React10.createElement(BsCalendarWeek, null), /* @__PURE__ */ React10.createElement("span", null, "Week"))
    }, /* @__PURE__ */ React10.createElement(motion5.div, _object_spread({}, animationConfig), /* @__PURE__ */ React10.createElement(WeeklyView, {
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.buttons,
        prevButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons2 = CustomComponents.customButtons) === null || _CustomComponents_customButtons2 === void 0 ? void 0 : _CustomComponents_customButtons2.CustomPrevButton,
        nextButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons3 = CustomComponents.customButtons) === null || _CustomComponents_customButtons3 === void 0 ? void 0 : _CustomComponents_customButtons3.CustomNextButton,
        CustomEventComponent: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventComponent,
        CustomEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventModal
    }))), (viewsSelector === null || viewsSelector === void 0 ? void 0 : viewsSelector.includes("month")) && /* @__PURE__ */ React10.createElement(Tab, {
        key: "month",
        title: (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customTabs2 = CustomComponents.customTabs) === null || _CustomComponents_customTabs2 === void 0 ? void 0 : _CustomComponents_customTabs2.CustomMonthTab) ? CustomComponents.customTabs.CustomMonthTab : /* @__PURE__ */ React10.createElement("div", {
            className: "flex items-center space-x-2"
        }, /* @__PURE__ */ React10.createElement(BsCalendarMonth, null), /* @__PURE__ */ React10.createElement("span", null, "Month"))
    }, /* @__PURE__ */ React10.createElement(motion5.div, _object_spread({}, animationConfig), /* @__PURE__ */ React10.createElement(MonthView, {
        classNames: classNames === null || classNames === void 0 ? void 0 : classNames.buttons,
        prevButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons4 = CustomComponents.customButtons) === null || _CustomComponents_customButtons4 === void 0 ? void 0 : _CustomComponents_customButtons4.CustomPrevButton,
        nextButton: CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons5 = CustomComponents.customButtons) === null || _CustomComponents_customButtons5 === void 0 ? void 0 : _CustomComponents_customButtons5.CustomNextButton,
        CustomEventComponent: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventComponent,
        CustomEventModal: CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.CustomEventModal
    })))), (CustomComponents === null || CustomComponents === void 0 ? void 0 : (_CustomComponents_customButtons6 = CustomComponents.customButtons) === null || _CustomComponents_customButtons6 === void 0 ? void 0 : _CustomComponents_customButtons6.CustomAddEventButton) ? /* @__PURE__ */ React10.createElement("div", {
        onClick: function() {
            return handleAddEvent();
        },
        className: "absolute top-0 right-0"
    }, CustomComponents === null || CustomComponents === void 0 ? void 0 : CustomComponents.customButtons.CustomAddEventButton) : /* @__PURE__ */ React10.createElement(Button5, {
        onClick: function() {
            return handleAddEvent();
        },
        className: "absolute top-0 right-0 " + (classNames === null || classNames === void 0 ? void 0 : (_classNames_buttons = classNames.buttons) === null || _classNames_buttons === void 0 ? void 0 : _classNames_buttons.addEvent),
        color: "primary",
        startContent: /* @__PURE__ */ React10.createElement(Calendar, null)
    }, "Add Event"))));
}
export { SchedulerViewFilteration as SchedularView, SchedulerProvider, eventSchema, useScheduler, variants };
