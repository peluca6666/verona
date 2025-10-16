module.exports = [
"[project]/src/components/admin/ProductForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$react$2d$uploader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/react-uploader/dist/react-uploader.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$FileUploaderRegular$2d$DOI7Lze6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/react-uploader/dist/FileUploaderRegular-DOI7Lze6.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ProductForm({ product, onSave, onCancel }) {
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: product?.name || '',
        price: product?.price || 0,
        category_id: product?.category_id || 0,
        material: product?.material || '',
        description: product?.description || '',
        primary_image: product?.primary_image || '',
        images: product?.images?.join(', ') || '',
        is_active: product?.is_active ?? true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchCategories() {
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategories"])();
                setCategories(data);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Error loading categories');
            }
        }
        fetchCategories();
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const dataToSend = {
                ...formData,
                price: Number(formData.price),
                category_id: Number(formData.category_id),
                images: formData.images ? formData.images.split(',').map((url)=>url.trim()).filter(Boolean) : []
            };
            await onSave(dataToSend);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success(product ? 'Updated' : 'Created');
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Error saving');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-8 py-6 border-b bg-gradient-to-r from-amber-50 to-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-light text-gray-900",
                        style: {
                            fontFamily: 'Playfair Display, serif'
                        },
                        children: product ? 'Edit Product' : 'New Product'
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide",
                                    children: "Product Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: formData.name,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            name: e.target.value
                                        }),
                                    className: "w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base text-gray-900 font-medium"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide",
                                            children: "Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            required: true,
                                            min: "0",
                                            step: "0.01",
                                            value: formData.price,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    price: Number(e.target.value)
                                                }),
                                            className: "w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base text-gray-900 font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            required: true,
                                            value: formData.category_id,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    category_id: Number(e.target.value)
                                                }),
                                            className: "w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base bg-white text-gray-900 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this),
                                                categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: cat.id,
                                                        children: cat.name
                                                    }, cat.id, false, {
                                                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide",
                                    children: "Material"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.material,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            material: e.target.value
                                        }),
                                    className: "w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base text-gray-900"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 4,
                                    value: formData.description,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            description: e.target.value
                                        }),
                                    className: "w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base resize-none text-gray-900"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide",
                                    children: "Primary Image"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$FileUploaderRegular$2d$DOI7Lze6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileUploaderRegular"], {
                                    pubkey: "ad23bee013f24377c6c9",
                                    maxLocalFileSizeBytes: 10000000,
                                    imgOnly: true,
                                    sourceList: "local, url, camera",
                                    classNameUploader: "uc-light",
                                    onFileUploadSuccess: (file)=>{
                                        if (file?.cdnUrl) {
                                            setFormData({
                                                ...formData,
                                                primary_image: file.cdnUrl
                                            });
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('Image uploaded!');
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                formData.primary_image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: formData.primary_image,
                                        alt: "Preview",
                                        className: "w-32 h-32 object-cover rounded-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide",
                                    children: "Additional Images"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$FileUploaderRegular$2d$DOI7Lze6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileUploaderRegular"], {
                                    pubkey: "ad23bee013f24377c6c9",
                                    maxLocalFileSizeBytes: 10000000,
                                    imgOnly: true,
                                    multiple: true,
                                    sourceList: "local, url, camera",
                                    classNameUploader: "uc-light",
                                    onFileUploadSuccess: (file)=>{
                                        if (file?.cdnUrl) {
                                            const currentImages = formData.images ? formData.images.split(',').map((url)=>url.trim()) : [];
                                            currentImages.push(file.cdnUrl);
                                            setFormData({
                                                ...formData,
                                                images: currentImages.join(', ')
                                            });
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('Image added!');
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-2",
                                    children: "Upload multiple images"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                formData.images && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex gap-2 flex-wrap",
                                    children: formData.images.split(',').map((url, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: url.trim(),
                                            alt: `Preview ${i + 1}`,
                                            className: "w-20 h-20 object-cover rounded-lg"
                                        }, i, false, {
                                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-3 cursor-pointer p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: formData.is_active,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            is_active: e.target.checked
                                        }),
                                    className: "w-5 h-5 text-amber-600 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base font-medium text-gray-900",
                                    children: "Active and visible to customers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-8 py-5 border-t bg-gray-50 flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onCancel,
                            className: "flex-1 px-6 py-3.5 text-gray-700 hover:bg-gray-200 rounded-xl transition font-medium text-base",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            onClick: handleSubmit,
                            className: "flex-1 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl transition font-medium text-base shadow-lg disabled:opacity-50",
                            children: loading ? 'Saving...' : 'Save Product'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/ProductForm.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/ProductForm.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ProductForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/ProductForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AdminPage() {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProduct, setEditingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProducts();
    }, []);
    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductsForAdmin"])();
            setProducts(response.data);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Error loading products');
        } finally{
            setLoading(false);
        }
    }
    async function handleToggleActive(product) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProduct"])(product.id, {
                is_active: !product.is_active
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success(product.is_active ? 'Deactivated' : 'Activated');
            fetchProducts();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Error updating product');
        }
    }
    async function handleSaveProduct(data) {
        try {
            if (editingProduct) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProduct"])(editingProduct.id, data);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProduct"])(data);
            }
            setShowForm(false);
            setEditingProduct(null);
            fetchProducts();
        } catch (err) {
            throw err;
        }
    }
    const filtered = products.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()) || p.material && p.material.toLowerCase().includes(search.toLowerCase()));
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20 text-lg text-gray-600",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 63,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1400px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-light text-gray-900 mb-1",
                                style: {
                                    fontFamily: 'Playfair Display, serif'
                                },
                                children: "Products"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600",
                                children: [
                                    filtered.length,
                                    " products"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setEditingProduct(null);
                            setShowForm(true);
                        },
                        className: "group relative inline-block px-16 py-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-medium tracking-[0.15em] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden",
                        children: "+ New Product"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search by name or material...",
                value: search,
                onChange: (e)=>setSearch(e.target.value),
                className: "w-full px-5 py-3.5 mb-8 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base transition"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: filtered.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all",
                        children: [
                            product.primary_image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: product.primary_image,
                                alt: product.name,
                                className: "w-full h-48 object-cover rounded-lg mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 100,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 text-sm",
                                    children: "No image"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-lg text-gray-900 leading-tight",
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap ${product.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`,
                                                children: product.is_active ? 'Active' : 'Inactive'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-amber-600 mb-2",
                                        children: [
                                            "$",
                                            product.price.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this),
                                    product.material && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md inline-block",
                                        children: product.material
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 pt-3 border-t border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setEditingProduct(product);
                                            setShowForm(true);
                                        },
                                        className: "flex-1 px-4 py-2.5 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 font-medium text-sm transition",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleToggleActive(product),
                                        className: `flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition ${product.is_active ? 'bg-red-50 text-red-700 hover:bg-red-100' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`,
                                        children: product.is_active ? 'Disable' : 'Enable'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-24 bg-white rounded-xl border-2 border-dashed border-gray-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-400 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-16 h-16 mx-auto",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 1.5,
                                d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600 mb-2",
                        children: search ? 'No products found' : 'No products yet'
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base text-gray-500",
                        children: search ? 'Try a different search term' : 'Create your first product to get started'
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ProductForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                product: editingProduct,
                onSave: handleSaveProduct,
                onCancel: ()=>{
                    setShowForm(false);
                    setEditingProduct(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/@uploadcare/file-uploader/index.ssr.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityBlock",
    ()=>ActivityBlock,
    "ActivityHeader",
    ()=>ActivityHeader,
    "BaseComponent",
    ()=>BaseComponent,
    "Block",
    ()=>Block,
    "BtnUi",
    ()=>BtnUi,
    "CameraSource",
    ()=>CameraSource,
    "CloudImageEditor",
    ()=>CloudImageEditor,
    "CloudImageEditorActivity",
    ()=>CloudImageEditorActivity,
    "CloudImageEditorBlock",
    ()=>CloudImageEditorBlock,
    "Config",
    ()=>Config,
    "Copyright",
    ()=>Copyright,
    "CropFrame",
    ()=>CropFrame,
    "Data",
    ()=>Data,
    "DropArea",
    ()=>DropArea,
    "EditorCropButtonControl",
    ()=>EditorCropButtonControl,
    "EditorFilterControl",
    ()=>EditorFilterControl,
    "EditorImageCropper",
    ()=>EditorImageCropper,
    "EditorImageFader",
    ()=>EditorImageFader,
    "EditorOperationControl",
    ()=>EditorOperationControl,
    "EditorScroller",
    ()=>EditorScroller,
    "EditorSlider",
    ()=>EditorSlider,
    "EditorToolbar",
    ()=>EditorToolbar,
    "ExternalSource",
    ()=>ExternalSource,
    "ExternalUploadSource",
    ()=>ExternalUploadSource,
    "FileItem",
    ()=>FileItem,
    "FileUploaderInline",
    ()=>FileUploaderInline,
    "FileUploaderMinimal",
    ()=>FileUploaderMinimal,
    "FileUploaderRegular",
    ()=>FileUploaderRegular,
    "FormInput",
    ()=>FormInput,
    "Icon",
    ()=>Icon,
    "Img",
    ()=>Img,
    "LineLoaderUi",
    ()=>LineLoaderUi,
    "Modal",
    ()=>Modal,
    "ModalEvents",
    ()=>ModalEvents,
    "PACKAGE_NAME",
    ()=>PACKAGE_NAME,
    "PACKAGE_VERSION",
    ()=>PACKAGE_VERSION,
    "PresenceToggle",
    ()=>PresenceToggle,
    "ProgressBar",
    ()=>ProgressBar,
    "ProgressBarCommon",
    ()=>ProgressBarCommon,
    "Select",
    ()=>Select,
    "SimpleBtn",
    ()=>SimpleBtn,
    "SliderUi",
    ()=>SliderUi,
    "SolutionBlock",
    ()=>SolutionBlock,
    "SourceBtn",
    ()=>SourceBtn,
    "SourceList",
    ()=>SourceList,
    "Spinner",
    ()=>Spinner,
    "StartFrom",
    ()=>StartFrom,
    "Thumb",
    ()=>Thumb,
    "UID",
    ()=>UID,
    "UploadCtxProvider",
    ()=>UploadCtxProvider,
    "UploadList",
    ()=>UploadList,
    "UploadSource",
    ()=>UploadSource,
    "UploaderBlock",
    ()=>UploaderBlock,
    "UrlSource",
    ()=>UrlSource,
    "defineComponents",
    ()=>defineComponents,
    "defineLocale",
    ()=>defineLocale,
    "loadFileUploaderFrom",
    ()=>loadFileUploaderFrom,
    "toKebabCase",
    ()=>toKebabCase
]);
const ActivityBlock = class {
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const ActivityHeader = class {
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const BaseComponent = class {
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Block = class {
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const BtnUi = class {
    static observedAttributes = [
        "text",
        "icon",
        "reverse",
        "theme"
    ];
    static template = `
  <button
    type="button"
    set="@role:aria-role; @aria-controls: aria-controls; @aria-label:title-prop"
    l10n="@title:title-prop;"
  >
    <uc-icon set="className: iconCss; @name: icon; @hidden: !icon"></uc-icon>
    <div class="uc-text">{{text}}</div>
  </button>
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const CameraSource = class {
    static template = `
  <uc-activity-header>
    <button type="button" class="uc-mini-btn" set="onclick: *historyBack" l10n="@title:back">
      <uc-icon name="back"></uc-icon>
    </button>
    <div set="@hidden: !cameraSelectHidden">
      <uc-icon name="camera"></uc-icon>
      <span l10n="caption-camera"></span>
    </div>
    <uc-select
      class="uc-camera-select"
      set="$.options: cameraSelectOptions; @hidden: cameraSelectHidden; onchange: onCameraSelectChange"
    >
    </uc-select>
    <button
      type="button"
      class="uc-mini-btn uc-close-btn"
      set="onclick: *closeModal"
      l10n="@title:a11y-activity-header-button-close;@aria-label:a11y-activity-header-button-close"
    >
      <uc-icon name="close"></uc-icon>
    </button>
  </uc-activity-header>
  <div class="uc-content">
    <video
      muted
      autoplay
      playsinline
      set="srcObject: video; style.transform: videoTransformCss; @hidden: videoHidden"
      ref="video"
    ></video>
    <div class="uc-message-box" set="@hidden: messageHidden">
      <span l10n="l10nMessage"></span>
      <button
        type="button"
        set="onclick: onRequestPermissions; @hidden: requestBtnHidden"
        l10n="camera-permissions-request"
      ></button>
    </div>
  </div>

  <div class="uc-controls">
    <div ref="switcher" class="uc-switcher" set="@hidden:!timerHidden">
      <button
        data-id="photo"
        type="button"
        class="uc-switch uc-mini-btn"
        set="onclick: onClickTab;  @hidden: tabCameraHidden"
      >
        <uc-icon name="camera"></uc-icon>
      </button>
      <button
        data-id="video"
        type="button"
        class="uc-switch uc-mini-btn"
        set="onclick: onClickTab; @hidden: tabVideoHidden"
      >
        <uc-icon name="video-camera"></uc-icon>
      </button>
    </div>

    <button class="uc-secondary-btn uc-recording-timer" set="@hidden:timerHidden; onclick: onToggleRecording">
      <uc-icon set="@name: currentTimelineIcon"></uc-icon>
      <span ref="timer"> 00:00 </span>
      <span ref="line" class="uc-line"></span>
    </button>

    <div class="uc-camera-actions uc-camera-action" set="@hidden: cameraActionsHidden">
      <button type="button" class="uc-secondary-btn" set="onclick: onRetake">Retake</button>
      <button type="button" class="uc-primary-btn" set="onclick: onAccept" data-testid="accept">Accept</button>
    </div>

    <button
      type="button"
      class="uc-shot-btn uc-camera-action"
      data-testid="shot"
      set="onclick: onStartCamera; @class: mutableClassButton; @hidden: cameraHidden;"
    >
      <uc-icon set="@name: currentIcon"></uc-icon>
    </button>

    <div class="uc-select">
      <button class="uc-mini-btn uc-btn-microphone" set="onclick: onToggleAudio; @hidden: audioToggleMicrophoneHidden;">
        <uc-icon set="@name:toggleMicrophoneIcon"></uc-icon>
      </button>

      <uc-select
        class="uc-audio-select"
        set="$.options: audioSelectOptions; onchange: onAudioSelectChange; @hidden: audioSelectHidden; @disabled: audioSelectDisabled"
      >
      </uc-select>
    </div>
  </div>
`;
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const CloudImageEditor = class {
    static styleAttrs = [];
    static template = `
  <svg width='0' height='0' style='position:absolute'><symbol viewBox='0 0 20 20' id='uc-icon-brightness' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M15 10a5 5 0 0 1-5 5m5-5a5 5 0 0 0-5-5m5 5h-5m0 5a5 5 0 0 1 0-10m0 10V5m0 15v-3M2.93 2.929 5.05 5.05M0 10h3m-.07 7.071 2.12-2.121M10 0v3m7.07 14.071-2.12-2.121M20 10h-3m.07-7.071L14.95 5.05m-.626 2.45H10m4.324 5H10'/></symbol><symbol fill='currentColor' viewBox='0 0 20 20' id='uc-icon-closeMax' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M8.232 10 3.585 5.353l1.768-1.768L10 8.232l4.648-4.647 1.767 1.768L11.768 10l4.647 4.648-1.767 1.767L10 11.768l-4.647 4.647-1.768-1.767L8.232 10Z' clip-rule='evenodd'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-contrast' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M2 10a8 8 0 1 0 16 0 8 8 0 1 0-16 0m8-8v16m8-8h-8m7.598 2.5H10m6.24 2.5H10m7.6-7.5H10M16.242 5H10'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-crop' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M20 14H7.005C6.45 14 6 13.55 6 12.995V0M0 6h13.067c.515 0 .933.418.933.933V20M14.5.4 13 2l1.5 1.6M13 2h2a3 3 0 0 1 3 3v2M5.5 19.6 7 18l-1.5-1.6M7 18H5a3 3 0 0 1-3-3v-2'/></symbol><symbol fill='currentColor' viewBox='0 0 20 20' id='uc-icon-done' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='m18.057 6.333-9.365 9.125a1.25 1.25 0 0 1-1.768-.023L1.92 10.296l1.791-1.744 4.132 4.243 8.47-8.253 1.744 1.79Z' clip-rule='evenodd'/></symbol><symbol fill='currentColor' viewBox='0 0 25 24' id='uc-icon-edit-file' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M18.558 2.804a.78.78 0 0 0-.557.235l-.008.007-2.472 2.46 3.847 3.848 2.46-2.473.004-.003a.78.78 0 0 0 0-1.108l-.004-.003-2.712-2.728a.78.78 0 0 0-.558-.235Zm-.248 7.613-3.852-3.852-8.93 8.887-1.516 5.41 5.41-1.515 8.888-8.93Zm-.636-8.934a2.28 2.28 0 0 1 2.512.505l2.702 2.717.002.002a2.278 2.278 0 0 1 0 3.234l-.002.002-12.541 12.602a.75.75 0 0 1-.33.193l-6.884 1.928a.75.75 0 0 1-.925-.924l1.928-6.885a.75.75 0 0 1 .193-.33l12.603-12.54a2.28 2.28 0 0 1 .742-.504Z' clip-rule='evenodd'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-enhance' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M19 13h-2m0 0a4 4 0 0 1-4-4m4 4a4 4 0 0 0-4 4m0-8V7m0 2a4 4 0 0 1-4 4m-2 0h2m0 0a4 4 0 0 1 4 4m0 0v2M8 8.5H6.5m0 0a2 2 0 0 1-2-2m2 2a2 2 0 0 0-2 2m0-4V5m0 1.5a2 2 0 0 1-2 2M1 8.5h1.5m0 0a2 2 0 0 1 2 2m0 0V12M12 3h-1m0 0a1 1 0 0 1-1-1m1 1a1 1 0 0 0-1 1m0-2V1m0 1a1 1 0 0 1-1 1M8 3h1m0 0a1 1 0 0 1 1 1m0 0v1'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-exposure' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M10 20v-3M2.93 2.929 5.05 5.05M0 10h3m-.07 7.071 2.12-2.121M10 0v3m7.07 14.071-2.12-2.121M20 10h-3m.07-7.071L14.95 5.05M5 10a5 5 0 1 0 10 0 5 5 0 1 0-10 0'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-filters' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M4.5 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0m-3.5 6a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0m7 0a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-flip' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M19.6 5 18 3.5 16.4 5m3.2 10L18 16.5 16.4 15M18 3.523v12.954M3.3 8.5h10.654c.301 0 .415-.395.159-.554L3.459 1.286A.3.3 0 0 0 3 1.542V8.2a.3.3 0 0 0 .3.3zm0 3h10.654c.301 0 .415.395.159.554l-10.654 6.66A.3.3 0 0 1 3 18.458v-6.66a.3.3 0 0 1 .3-.3z'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-gamma' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M17 3C9 6 2.5 11.5 2.5 17.5m0 0h1m-1 0v-1m14 1h1m-3 0h1m-3 0h1m-3 0h1m-3 0h1m-3 0h1m-3 0h1m-3-14v-1m0 3v-1m0 3v-1m0 3v-1m0 3v-1m0 3v-1m0 3v-1'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-mirror' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M5 .4 3.5 2 5 3.6M15 .4 16.5 2 15 3.6M3.52 2h12.957M8.5 16.7V6.046c0-.301-.394-.415-.554-.159L1.287 16.541a.3.3 0 0 0 .255.459H8.2a.3.3 0 0 0 .3-.3zm3 0V6.046c0-.301.395-.415.555-.159l6.659 10.654a.3.3 0 0 1-.255.459H11.8a.3.3 0 0 1-.3-.3z'/></symbol><symbol viewBox='0 0 40 40' id='uc-icon-original' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.5' d='M0 40 40 0'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-rotate' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M13.5.4 12 2l1.5 1.6M12.023 2H14.4A3.6 3.6 0 0 1 18 5.6V8M4 17h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1z'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-sad' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M2 17c4.418-4 11.582-4 16 0M16.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-saturation' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='puc-icon-id__a' x1='10.001' y1='1' x2='10.001' y2='19' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient></defs><circle cx='10.001' cy='10' r='9' transform='rotate(90 10 10)' fill='url(#puc-icon-id__a)'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-slider' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M0 10h11m0 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m0 0h5'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-tuning' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M8 10h11M1 10h4M1 4.5h11m3 0h4m-18 11h11m3 0h4m-7-11a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M5 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m7 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-vibrance' xmlns='http://www.w3.org/2000/svg'><path d='M2.125 5.64A8.96 8.96 0 0 0 1.001 10a8.96 8.96 0 0 0 1.124 4.36V5.64z' fill='url(#suc-icon-id__a)'/><path d='M2.875 15.499V4.502a9.053 9.053 0 0 1 1.75-1.72v14.437a9.05 9.05 0 0 1-1.75-1.72z' fill='url(#suc-icon-id__b)'/><path d='M5.375 17.722c.548.33 1.134.601 1.75.809V1.469a8.956 8.956 0 0 0-1.75.81v15.443z' fill='url(#suc-icon-id__c)'/><path d='M7.875 1.253v17.495c.564.136 1.15.22 1.75.244V1.008a9 9 0 0 0-1.75.245z' fill='url(#suc-icon-id__d)'/><path d='M10.375 1.008v17.984a9 9 0 0 0 1.75-.244V1.252a9 9 0 0 0-1.75-.244z' fill='url(#suc-icon-id__e)'/><path d='M12.875 1.469V18.53a8.957 8.957 0 0 0 1.75-.808V2.277a8.957 8.957 0 0 0-1.75-.808z' fill='url(#suc-icon-id__f)'/><path d='M15.375 2.78v14.44a9.053 9.053 0 0 0 1.75-1.72v-11a9.054 9.054 0 0 0-1.75-1.72z' fill='url(#suc-icon-id__g)'/><path d='M17.875 5.638v8.724A8.959 8.959 0 0 0 19.001 10a8.96 8.96 0 0 0-1.126-4.362z' fill='url(#suc-icon-id__h)'/><defs><linearGradient id='suc-icon-id__a' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__b' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__c' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__d' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__e' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__f' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__g' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__h' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient></defs></symbol><symbol viewBox='0 0 20 20' id='uc-icon-warmth' xmlns='http://www.w3.org/2000/svg'><path d='m7.5 13.05.429.42.171-.175v-.244h-.6zm5 0h-.6v.245l.172.175.428-.42zM8.1 3.5c0-1.05.85-1.9 1.9-1.9V.4a3.1 3.1 0 0 0-3.1 3.1h1.2zm0 9.55V3.5H6.9v9.55h1.2zm-1 2.45c0-.79.315-1.506.829-2.03l-.858-.84A4.088 4.088 0 0 0 5.9 15.5h1.2zm2.9 2.9a2.9 2.9 0 0 1-2.9-2.9H5.9a4.1 4.1 0 0 0 4.1 4.1v-1.2zm2.9-2.9a2.9 2.9 0 0 1-2.9 2.9v1.2a4.1 4.1 0 0 0 4.1-4.1h-1.2zm-.829-2.03c.514.524.829 1.24.829 2.03h1.2c0-1.117-.447-2.13-1.171-2.87l-.858.84zM11.9 3.5v9.55h1.2V3.5h-1.2zM10 1.6c1.05 0 1.9.85 1.9 1.9h1.2A3.1 3.1 0 0 0 10 .4v1.2z' fill='currentColor'/><path d='M10 14V8' stroke='currentColor' stroke-width='1.2' stroke-linecap='round'/><path d='M14 3h3m-3 3h3m-3 3h3m-8 6.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0' stroke='currentColor' stroke-width='1.2'/></symbol></svg>
  <div class="uc-wrapper uc-wrapper_desktop">
    <uc-presence-toggle class="uc-network_problems_splash" set="visible: presence.networkProblems;">
      <div class="uc-network_problems_content">
        <div class="uc-network_problems_icon">
          <uc-icon name="sad"></uc-icon>
        </div>
        <div class="uc-network_problems_text">Network error</div>
      </div>
      <div class="uc-network_problems_footer">
        <uc-btn-ui theme="primary" text="Retry" set="onclick: *on.retryNetwork"></uc-btn-ui>
      </div>
    </uc-presence-toggle>
    <div class="uc-viewport">
      <div class="uc-file_type_outer">
        <div class="uc-file_type">{{fileType}}</div>
      </div>
      <div class="uc-image_container" ref="img-container-el">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" class="uc-image uc-image_visible_from_editor" ref="img-el" />
        <uc-editor-image-cropper ref="cropper-el"></uc-editor-image-cropper>
        <uc-editor-image-fader ref="fader-el"></uc-editor-image-fader>
      </div>
      <div class="uc-info_pan">{{msg}}</div>
    </div>
    <div class="uc-toolbar">
      <uc-line-loader-ui set="active: showLoader"></uc-line-loader-ui>
      <div class="uc-toolbar_content uc-toolbar_content__editor">
        <uc-editor-toolbar></uc-editor-toolbar>
      </div>
    </div>
  </div>
`;
    static observedAttributes = [
        "uuid",
        "cdn-url",
        "crop-preset",
        "tabs"
    ];
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const CloudImageEditorActivity = class {
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const CloudImageEditorBlock = class {
    static styleAttrs = [];
    static template = `
  <svg width='0' height='0' style='position:absolute'><symbol viewBox='0 0 20 20' id='uc-icon-brightness' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M15 10a5 5 0 0 1-5 5m5-5a5 5 0 0 0-5-5m5 5h-5m0 5a5 5 0 0 1 0-10m0 10V5m0 15v-3M2.93 2.929 5.05 5.05M0 10h3m-.07 7.071 2.12-2.121M10 0v3m7.07 14.071-2.12-2.121M20 10h-3m.07-7.071L14.95 5.05m-.626 2.45H10m4.324 5H10'/></symbol><symbol fill='currentColor' viewBox='0 0 20 20' id='uc-icon-closeMax' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M8.232 10 3.585 5.353l1.768-1.768L10 8.232l4.648-4.647 1.767 1.768L11.768 10l4.647 4.648-1.767 1.767L10 11.768l-4.647 4.647-1.768-1.767L8.232 10Z' clip-rule='evenodd'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-contrast' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M2 10a8 8 0 1 0 16 0 8 8 0 1 0-16 0m8-8v16m8-8h-8m7.598 2.5H10m6.24 2.5H10m7.6-7.5H10M16.242 5H10'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-crop' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M20 14H7.005C6.45 14 6 13.55 6 12.995V0M0 6h13.067c.515 0 .933.418.933.933V20M14.5.4 13 2l1.5 1.6M13 2h2a3 3 0 0 1 3 3v2M5.5 19.6 7 18l-1.5-1.6M7 18H5a3 3 0 0 1-3-3v-2'/></symbol><symbol fill='currentColor' viewBox='0 0 20 20' id='uc-icon-done' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='m18.057 6.333-9.365 9.125a1.25 1.25 0 0 1-1.768-.023L1.92 10.296l1.791-1.744 4.132 4.243 8.47-8.253 1.744 1.79Z' clip-rule='evenodd'/></symbol><symbol fill='currentColor' viewBox='0 0 25 24' id='uc-icon-edit-file' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M18.558 2.804a.78.78 0 0 0-.557.235l-.008.007-2.472 2.46 3.847 3.848 2.46-2.473.004-.003a.78.78 0 0 0 0-1.108l-.004-.003-2.712-2.728a.78.78 0 0 0-.558-.235Zm-.248 7.613-3.852-3.852-8.93 8.887-1.516 5.41 5.41-1.515 8.888-8.93Zm-.636-8.934a2.28 2.28 0 0 1 2.512.505l2.702 2.717.002.002a2.278 2.278 0 0 1 0 3.234l-.002.002-12.541 12.602a.75.75 0 0 1-.33.193l-6.884 1.928a.75.75 0 0 1-.925-.924l1.928-6.885a.75.75 0 0 1 .193-.33l12.603-12.54a2.28 2.28 0 0 1 .742-.504Z' clip-rule='evenodd'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-enhance' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M19 13h-2m0 0a4 4 0 0 1-4-4m4 4a4 4 0 0 0-4 4m0-8V7m0 2a4 4 0 0 1-4 4m-2 0h2m0 0a4 4 0 0 1 4 4m0 0v2M8 8.5H6.5m0 0a2 2 0 0 1-2-2m2 2a2 2 0 0 0-2 2m0-4V5m0 1.5a2 2 0 0 1-2 2M1 8.5h1.5m0 0a2 2 0 0 1 2 2m0 0V12M12 3h-1m0 0a1 1 0 0 1-1-1m1 1a1 1 0 0 0-1 1m0-2V1m0 1a1 1 0 0 1-1 1M8 3h1m0 0a1 1 0 0 1 1 1m0 0v1'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-exposure' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M10 20v-3M2.93 2.929 5.05 5.05M0 10h3m-.07 7.071 2.12-2.121M10 0v3m7.07 14.071-2.12-2.121M20 10h-3m.07-7.071L14.95 5.05M5 10a5 5 0 1 0 10 0 5 5 0 1 0-10 0'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-filters' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M4.5 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0m-3.5 6a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0m7 0a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-flip' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M19.6 5 18 3.5 16.4 5m3.2 10L18 16.5 16.4 15M18 3.523v12.954M3.3 8.5h10.654c.301 0 .415-.395.159-.554L3.459 1.286A.3.3 0 0 0 3 1.542V8.2a.3.3 0 0 0 .3.3zm0 3h10.654c.301 0 .415.395.159.554l-10.654 6.66A.3.3 0 0 1 3 18.458v-6.66a.3.3 0 0 1 .3-.3z'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-gamma' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M17 3C9 6 2.5 11.5 2.5 17.5m0 0h1m-1 0v-1m14 1h1m-3 0h1m-3 0h1m-3 0h1m-3 0h1m-3 0h1m-3 0h1m-3-14v-1m0 3v-1m0 3v-1m0 3v-1m0 3v-1m0 3v-1m0 3v-1'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-mirror' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M5 .4 3.5 2 5 3.6M15 .4 16.5 2 15 3.6M3.52 2h12.957M8.5 16.7V6.046c0-.301-.394-.415-.554-.159L1.287 16.541a.3.3 0 0 0 .255.459H8.2a.3.3 0 0 0 .3-.3zm3 0V6.046c0-.301.395-.415.555-.159l6.659 10.654a.3.3 0 0 1-.255.459H11.8a.3.3 0 0 1-.3-.3z'/></symbol><symbol viewBox='0 0 40 40' id='uc-icon-original' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.5' d='M0 40 40 0'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-rotate' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M13.5.4 12 2l1.5 1.6M12.023 2H14.4A3.6 3.6 0 0 1 18 5.6V8M4 17h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1z'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-sad' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M2 17c4.418-4 11.582-4 16 0M16.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-saturation' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='puc-icon-id__a' x1='10.001' y1='1' x2='10.001' y2='19' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient></defs><circle cx='10.001' cy='10' r='9' transform='rotate(90 10 10)' fill='url(#puc-icon-id__a)'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-slider' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M0 10h11m0 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m0 0h5'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-tuning' xmlns='http://www.w3.org/2000/svg'><path stroke-linejoin='round' fill='none' stroke='currentColor' stroke-width='1.2' d='M8 10h11M1 10h4M1 4.5h11m3 0h4m-18 11h11m3 0h4m-7-11a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M5 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m7 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0'/></symbol><symbol viewBox='0 0 20 20' id='uc-icon-vibrance' xmlns='http://www.w3.org/2000/svg'><path d='M2.125 5.64A8.96 8.96 0 0 0 1.001 10a8.96 8.96 0 0 0 1.124 4.36V5.64z' fill='url(#suc-icon-id__a)'/><path d='M2.875 15.499V4.502a9.053 9.053 0 0 1 1.75-1.72v14.437a9.05 9.05 0 0 1-1.75-1.72z' fill='url(#suc-icon-id__b)'/><path d='M5.375 17.722c.548.33 1.134.601 1.75.809V1.469a8.956 8.956 0 0 0-1.75.81v15.443z' fill='url(#suc-icon-id__c)'/><path d='M7.875 1.253v17.495c.564.136 1.15.22 1.75.244V1.008a9 9 0 0 0-1.75.245z' fill='url(#suc-icon-id__d)'/><path d='M10.375 1.008v17.984a9 9 0 0 0 1.75-.244V1.252a9 9 0 0 0-1.75-.244z' fill='url(#suc-icon-id__e)'/><path d='M12.875 1.469V18.53a8.957 8.957 0 0 0 1.75-.808V2.277a8.957 8.957 0 0 0-1.75-.808z' fill='url(#suc-icon-id__f)'/><path d='M15.375 2.78v14.44a9.053 9.053 0 0 0 1.75-1.72v-11a9.054 9.054 0 0 0-1.75-1.72z' fill='url(#suc-icon-id__g)'/><path d='M17.875 5.638v8.724A8.959 8.959 0 0 0 19.001 10a8.96 8.96 0 0 0-1.126-4.362z' fill='url(#suc-icon-id__h)'/><defs><linearGradient id='suc-icon-id__a' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__b' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__c' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__d' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__e' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__f' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__g' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient><linearGradient id='suc-icon-id__h' x1='19.001' y1='10' x2='1.001' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#DE15FF'/><stop offset='.203' stop-color='#0029FF'/><stop offset='.479' stop-color='#2AE4F0'/><stop offset='.604' stop-color='#15EF11'/><stop offset='.75' stop-color='#FAE528'/><stop offset='1' stop-color='#EB2A2A'/></linearGradient></defs></symbol><symbol viewBox='0 0 20 20' id='uc-icon-warmth' xmlns='http://www.w3.org/2000/svg'><path d='m7.5 13.05.429.42.171-.175v-.244h-.6zm5 0h-.6v.245l.172.175.428-.42zM8.1 3.5c0-1.05.85-1.9 1.9-1.9V.4a3.1 3.1 0 0 0-3.1 3.1h1.2zm0 9.55V3.5H6.9v9.55h1.2zm-1 2.45c0-.79.315-1.506.829-2.03l-.858-.84A4.088 4.088 0 0 0 5.9 15.5h1.2zm2.9 2.9a2.9 2.9 0 0 1-2.9-2.9H5.9a4.1 4.1 0 0 0 4.1 4.1v-1.2zm2.9-2.9a2.9 2.9 0 0 1-2.9 2.9v1.2a4.1 4.1 0 0 0 4.1-4.1h-1.2zm-.829-2.03c.514.524.829 1.24.829 2.03h1.2c0-1.117-.447-2.13-1.171-2.87l-.858.84zM11.9 3.5v9.55h1.2V3.5h-1.2zM10 1.6c1.05 0 1.9.85 1.9 1.9h1.2A3.1 3.1 0 0 0 10 .4v1.2z' fill='currentColor'/><path d='M10 14V8' stroke='currentColor' stroke-width='1.2' stroke-linecap='round'/><path d='M14 3h3m-3 3h3m-3 3h3m-8 6.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0' stroke='currentColor' stroke-width='1.2'/></symbol></svg>
  <div class="uc-wrapper uc-wrapper_desktop">
    <uc-presence-toggle class="uc-network_problems_splash" set="visible: presence.networkProblems;">
      <div class="uc-network_problems_content">
        <div class="uc-network_problems_icon">
          <uc-icon name="sad"></uc-icon>
        </div>
        <div class="uc-network_problems_text">Network error</div>
      </div>
      <div class="uc-network_problems_footer">
        <uc-btn-ui theme="primary" text="Retry" set="onclick: *on.retryNetwork"></uc-btn-ui>
      </div>
    </uc-presence-toggle>
    <div class="uc-viewport">
      <div class="uc-file_type_outer">
        <div class="uc-file_type">{{fileType}}</div>
      </div>
      <div class="uc-image_container" ref="img-container-el">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" class="uc-image uc-image_visible_from_editor" ref="img-el" />
        <uc-editor-image-cropper ref="cropper-el"></uc-editor-image-cropper>
        <uc-editor-image-fader ref="fader-el"></uc-editor-image-fader>
      </div>
      <div class="uc-info_pan">{{msg}}</div>
    </div>
    <div class="uc-toolbar">
      <uc-line-loader-ui set="active: showLoader"></uc-line-loader-ui>
      <div class="uc-toolbar_content uc-toolbar_content__editor">
        <uc-editor-toolbar></uc-editor-toolbar>
      </div>
    </div>
  </div>
`;
    static observedAttributes = [
        "uuid",
        "cdn-url",
        "crop-preset",
        "tabs"
    ];
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Config = class {
    static observedAttributes = [
        "debug",
        "pubkey",
        "multiple",
        "multiple-min",
        "multiple-max",
        "confirm-upload",
        "img-only",
        "accept",
        "external-sources-preferred-types",
        "external-sources-embed-css",
        "store",
        "camera-mirror",
        "camera-capture",
        "source-list",
        "top-level-origin",
        "cloud-image-editor-tabs",
        "max-local-file-size-bytes",
        "thumb-size",
        "show-empty-list",
        "use-local-image-editor",
        "use-cloud-image-editor",
        "remove-copyright",
        "crop-preset",
        "image-shrink",
        "modal-scroll-lock",
        "modal-backdrop-strokes",
        "source-list-wrap",
        "remote-tab-session-key",
        "cdn-cname",
        "cdn-cname-prefixed",
        "base-url",
        "social-base-url",
        "secure-signature",
        "secure-expire",
        "secure-delivery-proxy",
        "retry-throttled-request-max-times",
        "retry-network-error-max-times",
        "multipart-min-file-size",
        "multipart-chunk-size",
        "max-concurrent-requests",
        "multipart-max-concurrent-requests",
        "multipart-max-attempts",
        "check-for-url-duplicates",
        "save-url-for-recurrent-uploads",
        "group-output",
        "user-agent-integration",
        "locale-name",
        "secure-uploads-expire-threshold",
        "camera-modes",
        "default-camera-mode",
        "enable-audio-recording",
        "enable-video-recording",
        "max-video-recording-duration",
        "files-view-mode",
        "grid-show-file-names",
        "cloud-image-editor-auto-open",
        "cloud-image-editor-mask-href",
        "test-mode",
        "multiplemin",
        "multiplemax",
        "confirmupload",
        "imgonly",
        "externalsourcespreferredtypes",
        "externalsourcesembedcss",
        "cameramirror",
        "cameracapture",
        "sourcelist",
        "toplevelorigin",
        "cloudimageeditortabs",
        "maxlocalfilesizebytes",
        "thumbsize",
        "showemptylist",
        "uselocalimageeditor",
        "usecloudimageeditor",
        "removecopyright",
        "croppreset",
        "imageshrink",
        "modalscrolllock",
        "modalbackdropstrokes",
        "sourcelistwrap",
        "remotetabsessionkey",
        "cdncname",
        "cdncnameprefixed",
        "baseurl",
        "socialbaseurl",
        "securesignature",
        "secureexpire",
        "securedeliveryproxy",
        "retrythrottledrequestmaxtimes",
        "retrynetworkerrormaxtimes",
        "multipartminfilesize",
        "multipartchunksize",
        "maxconcurrentrequests",
        "multipartmaxconcurrentrequests",
        "multipartmaxattempts",
        "checkforurlduplicates",
        "saveurlforrecurrentuploads",
        "groupoutput",
        "useragentintegration",
        "localename",
        "secureuploadsexpirethreshold",
        "cameramodes",
        "defaultcameramode",
        "enableaudiorecording",
        "enablevideorecording",
        "maxvideorecordingduration",
        "filesviewmode",
        "gridshowfilenames",
        "cloudimageeditorautoopen",
        "cloudimageeditormaskhref",
        "testmode"
    ];
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Copyright = class {
    static template = `
    <a
      href="https://uploadcare.com/?utm_source=copyright&utm_medium=referral&utm_campaign=v4"
      target="_blank noopener"
      class="uc-credits"
      >Powered by Uploadcare</a
    >
  `;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const CropFrame = class {
    static template = ` <svg class="uc-svg" ref="svg-el" xmlns="http://www.w3.org/2000/svg"></svg> `;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Data = class {
    static warn = ()=>{};
    static registerCtx = ()=>{};
    static deleteCtx = ()=>{};
    static getCtx = ()=>{};
    static globalStore = {};
    static apply = ()=>{};
    static bind = ()=>{};
    static call = ()=>{};
    static toString = ()=>{};
    static hasOwnProperty = ()=>{};
    static isPrototypeOf = ()=>{};
    static propertyIsEnumerable = ()=>{};
    static valueOf = ()=>{};
    static toLocaleString = ()=>{};
};
const DropArea = class {
    static styleAttrs = [];
    static template = `
  <slot>
    <div data-default-slot hidden></div>
    <div ref="content-wrapper" class="uc-content-wrapper" set="@hidden: !isVisible">
      <div class="uc-icon-container" set="@hidden: !withIcon">
        <uc-icon name="default"></uc-icon>
        <uc-icon name="arrow-down"></uc-icon>
      </div>
      <span class="uc-text">{{text}}</span>
    </div>
  </slot>
`;
    static observedAttributes = [
        "with-icon",
        "clickable",
        "text",
        "fullscreen",
        "disabled",
        "initflow"
    ];
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const EditorCropButtonControl = class {
    static template = `
  <button role="option" type="button" set="@aria-label:title-prop;" l10n="@title:title-prop;">
    <uc-icon set="@name: icon;"></uc-icon>
    <div class="uc-title" ref="title-el">{{title}}</div>
  </button>
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const EditorFilterControl = class {
    static template = `
  <button role="option" type="button" set="@aria-label:title-prop;" l10n="@title:title-prop;">
    <uc-icon set="@name: icon;"></uc-icon>
    <div class="uc-title" ref="title-el">{{title}}</div>
  </button>
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const EditorImageCropper = class {
    static template = `
  <canvas class="uc-canvas" ref="canvas-el"></canvas>
  <uc-crop-frame ref="frame-el"></uc-crop-frame>
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const EditorImageFader = class {
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const EditorOperationControl = class {
    static template = `
  <button role="option" type="button" set="@aria-label:title-prop;" l10n="@title:title-prop;">
    <uc-icon set="@name: icon;"></uc-icon>
    <div class="uc-title" ref="title-el">{{title}}</div>
  </button>
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const EditorScroller = class {
    static template = ` <slot></slot> `;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const EditorSlider = class {
    static template = `
  <uc-slider-ui
    ref="slider-el"
    set="disabled: disabled; min: min; max: max; defaultValue: defaultValue; zero: zero; onInput: on.input;"
  ></uc-slider-ui>
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const EditorToolbar = class {
    static template = `
  <uc-line-loader-ui set="active: showLoader"></uc-line-loader-ui>
  <div class="uc-info-tooltip_container">
    <div class="uc-info-tooltip_wrapper">
      <div ref="tooltip-el" class="uc-info-tooltip uc-info-tooltip_hidden">{{*operationTooltip}}</div>
    </div>
  </div>
  <div class="uc-toolbar-container">
    <uc-presence-toggle
      role="tablist"
      class="uc-sub-toolbar"
      set="visible: presence.mainToolbar; styles: presence.subTopToolbarStyles"
    >
      <div class="uc-tab-content-row">
    <uc-presence-toggle
      id="tab_crop"
      class="uc-tab-content"
      set="visible: presence.tabContent.crop; styles: presence.tabContentStyles"
    >
      <uc-editor-scroller hidden-scrollbar>
        <div class="uc-controls-list_align">
          <div
            role="listbox"
            aria-orientation="horizontal"
            class="uc-controls-list_inner"
            ref="controls-list-crop"
          ></div>
        </div>
      </uc-editor-scroller>
    </uc-presence-toggle>
  
    <uc-presence-toggle
      id="tab_tuning"
      class="uc-tab-content"
      set="visible: presence.tabContent.tuning; styles: presence.tabContentStyles"
    >
      <uc-editor-scroller hidden-scrollbar>
        <div class="uc-controls-list_align">
          <div
            role="listbox"
            aria-orientation="horizontal"
            class="uc-controls-list_inner"
            ref="controls-list-tuning"
          ></div>
        </div>
      </uc-editor-scroller>
    </uc-presence-toggle>
  
    <uc-presence-toggle
      id="tab_filters"
      class="uc-tab-content"
      set="visible: presence.tabContent.filters; styles: presence.tabContentStyles"
    >
      <uc-editor-scroller hidden-scrollbar>
        <div class="uc-controls-list_align">
          <div
            role="listbox"
            aria-orientation="horizontal"
            class="uc-controls-list_inner"
            ref="controls-list-filters"
          ></div>
        </div>
      </uc-editor-scroller>
    </uc-presence-toggle>
  </div>
      <div class="uc-controls-row">
        <uc-presence-toggle
          class="uc-tab-toggles"
          set="visible: presence.tabToggles; styles: presence.tabTogglesStyles"
        >
          <div ref="tabs-indicator" class="uc-tab-toggles_indicator"></div>
          
    <uc-presence-toggle
      class="uc-tab-toggle"
      set="visible: presence.tabToggle.crop; styles: presence.tabToggleStyles;"
    >
      <uc-btn-ui
        theme="tab"
        ref="tab-toggle-crop"
        data-id="crop"
        icon="crop"
        set="onclick: on.clickTab; aria-role:tab_role; aria-controls:tab_crop; title-prop: a11y-editor-tab-crop"
      >
      </uc-btn-ui>
    </uc-presence-toggle>
  
    <uc-presence-toggle
      class="uc-tab-toggle"
      set="visible: presence.tabToggle.tuning; styles: presence.tabToggleStyles;"
    >
      <uc-btn-ui
        theme="tab"
        ref="tab-toggle-tuning"
        data-id="tuning"
        icon="tuning"
        set="onclick: on.clickTab; aria-role:tab_role; aria-controls:tab_tuning; title-prop: a11y-editor-tab-tuning"
      >
      </uc-btn-ui>
    </uc-presence-toggle>
  
    <uc-presence-toggle
      class="uc-tab-toggle"
      set="visible: presence.tabToggle.filters; styles: presence.tabToggleStyles;"
    >
      <uc-btn-ui
        theme="tab"
        ref="tab-toggle-filters"
        data-id="filters"
        icon="filters"
        set="onclick: on.clickTab; aria-role:tab_role; aria-controls:tab_filters; title-prop: a11y-editor-tab-filters"
      >
      </uc-btn-ui>
    </uc-presence-toggle>
  
        </uc-presence-toggle>
        <uc-btn-ui style="order: -1" theme="secondary-icon" icon="closeMax" set="onclick: on.cancel; title-prop:cancel">
        </uc-btn-ui>
        <uc-btn-ui theme="primary-icon" icon="done" set="onclick: on.apply; title-prop:apply"> </uc-btn-ui>
      </div>
    </uc-presence-toggle>
    <uc-presence-toggle
      class="uc-sub-toolbar"
      set="visible: presence.subToolbar; styles: presence.subBottomToolbarStyles"
    >
      <div class="uc-slider">
        <uc-editor-slider ref="slider-el"></uc-editor-slider>
      </div>
      <div class="uc-controls-row">
        <uc-btn-ui theme="secondary" set="onclick: on.cancelSlider" l10n="@text:cancel"> </uc-btn-ui>
        <uc-btn-ui theme="primary" set="onclick: on.applySlider" l10n="@text:apply"> </uc-btn-ui>
      </div>
    </uc-presence-toggle>
  </div>
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const ExternalSource = class {
    static template = `
  <uc-activity-header>
    <button
      type="button"
      class="uc-mini-btn uc-close-btn"
      set="onclick: *historyBack"
      l10n="@title:a11y-activity-header-button-close;@aria-label:a11y-activity-header-button-close"
    >
      <uc-icon name="close"></uc-icon>
    </button>
  </uc-activity-header>
  <div class="uc-content">
    <div ref="iframeWrapper" class="uc-iframe-wrapper"></div>
    <div class="uc-toolbar" set="@hidden: !toolbarVisible">
      <button type="button" class="uc-cancel-btn uc-secondary-btn" set="onclick: onCancel" l10n="cancel"></button>
      <div set="@hidden: !showSelectionStatus" class="uc-selection-status-box">
        <span>{{counterText}}</span>
        <button type="button" set="onclick: onSelectAll; @hidden: !couldSelectAll" l10n="select-all"></button>
        <button type="button" set="onclick: onDeselectAll; @hidden: !couldDeselectAll" l10n="deselect-all"></button>
      </div>
      <button type="button" class="uc-done-btn uc-primary-btn" set="onclick: onDone; @disabled: !isDoneBtnEnabled;">
        <uc-spinner set="@hidden: isSelectionReady"></uc-spinner>
        <span l10n="done" set="@class: doneBtnTextClass"></span>
      </button>
    </div>
  </div>
`;
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const ExternalUploadSource = {
    FACEBOOK: "facebook",
    DROPBOX: "dropbox",
    GDRIVE: "gdrive",
    GPHOTOS: "gphotos",
    FLICKR: "flickr",
    VK: "vk",
    EVERNOTE: "evernote",
    BOX: "box",
    ONEDRIVE: "onedrive",
    HUDDLE: "huddle"
};
const FileItem = class {
    static template = `
  <div class="uc-inner" set="@finished: isFinished; @uploading: isUploading; @failed: isFailed; @focused: isFocused">
    <uc-thumb set="uid:uid;badgeIcon:badgeIcon"></uc-thumb>

    <div aria-atomic="true" aria-live="polite" class="uc-file-name-wrapper" set="@aria-label:ariaLabelStatusFile;">
      <span class="uc-file-name" set="@hidden: !showFileNames">{{itemName}}</span>
      <span class="uc-file-error" set="@hidden: !errorText;">{{errorText}}</span>
      <span class="uc-file-hint" set="@hidden: !hint">{{hint}}</span>
    </div>
    <div class="uc-file-actions">
      <button
        type="button"
        l10n="@title:file-item-edit-button;@aria-label:file-item-edit-button"
        class="uc-edit-btn uc-mini-btn"
        set="onclick: onEdit; @hidden: !isEditable"
      >
        <uc-icon name="edit-file"></uc-icon>
      </button>
      <button
        type="button"
        l10n="@title:file-item-remove-button;@aria-label:file-item-remove-button"
        class="uc-remove-btn uc-mini-btn"
        set="onclick: onRemove;"
      >
        <uc-icon name="remove-file"></uc-icon>
      </button>
      <button type="button" class="uc-upload-btn uc-mini-btn" set="onclick: onUpload;">
        <uc-icon name="upload"></uc-icon>
      </button>
    </div>
    <uc-progress-bar
      class="uc-progress-bar"
      set="value: progressValue; visible: progressVisible; @hasFileName: showFileNames;"
    >
    </uc-progress-bar>
  </div>
`;
    static activeInstances = {};
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const FileUploaderInline = class {
    static styleAttrs = [];
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const FileUploaderMinimal = class {
    static styleAttrs = [];
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const FileUploaderRegular = class {
    static styleAttrs = [];
    static observedAttributes = [
        "headless"
    ];
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const FormInput = class {
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Icon = class {
    static template = `
  <svg ref="svg" xmlns="http://www.w3.org/2000/svg">
    <use set="@href: href;"></use>
  </svg>
`;
    static observedAttributes = [
        "name"
    ];
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Img = class {
    static observedAttributes = [
        "dev-mode",
        "pubkey",
        "uuid",
        "src",
        "lazy",
        "intersection",
        "breakpoints",
        "cdn-cname",
        "proxy-cname",
        "secure-delivery-proxy",
        "hi-res-support",
        "ultra-res-support",
        "format",
        "cdn-operations",
        "progressive",
        "quality",
        "is-background-for",
        "is-preview-blur"
    ];
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const LineLoaderUi = class {
    static template = `
  <div class="uc-inner">
    <div class="uc-line" ref="line-el"></div>
  </div>
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Modal = class {
    static styleAttrs = [];
    static StateConsumerScope = `modal`;
    static template = `
  <dialog ref="dialog">
    <slot></slot>
  </dialog>
`;
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const ModalEvents = {
    ADD: "modal:add",
    DELETE: "modal:delete",
    OPEN: "modal:open",
    CLOSE: "modal:close",
    CLOSE_ALL: "modal:closeAll",
    DESTROY: "modal:destroy"
};
const PACKAGE_NAME = `blocks`;
const PACKAGE_VERSION = `1.19.5`;
const PresenceToggle = class {
    static template = `<slot></slot> `;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const ProgressBar = class {
    static template = `
  <div ref="fakeProgressLine" class="uc-fake-progress"></div>
  <div ref="realProgressLine" class="uc-progress"></div>
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const ProgressBarCommon = class {
    static template = ` <uc-progress-bar set="visible: visible; value: value"></uc-progress-bar> `;
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Select = class {
    static template = ` <select ref="select" set="innerHTML: selectHtml; onchange: onSelect"></select> `;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const SimpleBtn = class {
    static styleAttrs = [];
    static template = `
  <uc-drop-area set="@disabled: !withDropZone">
    <button type="button" set="onclick: onClick">
      <uc-icon name="upload"></uc-icon>
      <span l10n="button-text"></span>
      <slot></slot>
      <div class="uc-visual-drop-area" l10n="drop-files-here"></div>
    </button>
  </uc-drop-area>
`;
    static observedAttributes = [
        "dropzone"
    ];
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const SliderUi = class {
    static template = `
  <div class="uc-steps" ref="steps-el"></div>
  <div ref="thumb-el" class="uc-thumb"></div>
  <input
    class="uc-input"
    type="range"
    ref="input-el"
    set="oninput: on.sliderInput; onchange: on.sliderChange; @min: min; @max: max; @value: defaultValue;"
  />
`;
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const SolutionBlock = class {
    static styleAttrs = [];
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const SourceBtn = class {
    static template = `
  <button type="button">
    <uc-icon set="@name: iconName"></uc-icon>
    <div class="uc-txt" l10n="src-type"></div>
  </button>
`;
    static observedAttributes = [
        "type"
    ];
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const SourceList = class {
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Spinner = class {
    static template = ` <div class="uc-spinner"></div> `;
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const StartFrom = class {
    static template = ` <div class="uc-content"><slot></slot></div> `;
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const Thumb = class {
    static template = `
  <div class="uc-thumb" set="style.backgroundImage: thumbUrl">
    <div class="uc-badge">
      <uc-icon set="@name: badgeIcon"></uc-icon>
    </div>
  </div>
`;
    static observedAttributes = [
        "badgeIcon",
        "uid"
    ];
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const UID = class {
    static generate = ()=>{};
    static apply = ()=>{};
    static bind = ()=>{};
    static call = ()=>{};
    static toString = ()=>{};
    static hasOwnProperty = ()=>{};
    static isPrototypeOf = ()=>{};
    static propertyIsEnumerable = ()=>{};
    static valueOf = ()=>{};
    static toLocaleString = ()=>{};
};
const UploadCtxProvider = class {
    static styleAttrs = [];
    static EventType = {
        FILE_ADDED: "file-added",
        FILE_REMOVED: "file-removed",
        FILE_UPLOAD_START: "file-upload-start",
        FILE_UPLOAD_PROGRESS: "file-upload-progress",
        FILE_UPLOAD_SUCCESS: "file-upload-success",
        FILE_UPLOAD_FAILED: "file-upload-failed",
        FILE_URL_CHANGED: "file-url-changed",
        MODAL_OPEN: "modal-open",
        MODAL_CLOSE: "modal-close",
        DONE_CLICK: "done-click",
        UPLOAD_CLICK: "upload-click",
        ACTIVITY_CHANGE: "activity-change",
        COMMON_UPLOAD_START: "common-upload-start",
        COMMON_UPLOAD_PROGRESS: "common-upload-progress",
        COMMON_UPLOAD_SUCCESS: "common-upload-success",
        COMMON_UPLOAD_FAILED: "common-upload-failed",
        CHANGE: "change",
        GROUP_CREATED: "group-created"
    };
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const UploadList = class {
    static template = `
  <uc-activity-header>
    <span aria-live="polite" class="uc-header-text">{{headerText}}</span>
    <button
      type="button"
      class="uc-mini-btn uc-close-btn"
      set="onclick: *closeModal"
      l10n="@title:a11y-activity-header-button-close;@aria-label:a11y-activity-header-button-close"
    >
      <uc-icon name="close"></uc-icon>
    </button>
  </uc-activity-header>

  <div class="uc-no-files" set="@hidden: hasFiles">
    <slot name="empty"><span l10n="no-files"></span></slot>
  </div>

  <div class="uc-files">
    <div class="uc-files-wrapper" repeat="*uploadList" repeat-item-tag="uc-file-item"></div>
    <button
      type="button"
      class="uc-add-more-btn uc-secondary-btn"
      set="onclick: onAdd; @disabled: !addMoreBtnEnabled; @hidden: !addMoreBtnVisible"
    >
      <uc-icon name="add"></uc-icon><span l10n="add-more"></span>
    </button>
  </div>

  <div class="uc-common-error" set="@hidden: !commonErrorMessage; textContent: commonErrorMessage;"></div>

  <div class="uc-toolbar">
    <button type="button" class="uc-cancel-btn uc-secondary-btn" set="onclick: onCancel;" l10n="clear"></button>
    <div class="uc-toolbar-spacer"></div>
    <button
      type="button"
      class="uc-add-more-btn uc-secondary-btn"
      set="onclick: onAdd; @disabled: !addMoreBtnEnabled; @hidden: !addMoreBtnVisible"
    >
      <uc-icon name="add"></uc-icon><span l10n="add-more"></span>
    </button>
    <button
      type="button"
      class="uc-upload-btn uc-primary-btn"
      set="@hidden: !uploadBtnVisible; onclick: onUpload;"
      l10n="upload"
    ></button>
    <button
      type="button"
      class="uc-done-btn uc-primary-btn"
      set="@hidden: !doneBtnVisible; onclick: onDone;  @disabled: !doneBtnEnabled"
      l10n="done"
    ></button>
  </div>

  <uc-drop-area ghost></uc-drop-area>
`;
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const UploadSource = {
    LOCAL: "local",
    DROP_AREA: "drop-area",
    CAMERA: "camera",
    EXTERNAL: "external",
    API: "js-api",
    URL: "url",
    DRAW: "draw",
    MOBILE_VIDEO_CAMERA: "mobile-video-camera",
    MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
    FACEBOOK: "facebook",
    DROPBOX: "dropbox",
    GDRIVE: "gdrive",
    GPHOTOS: "gphotos",
    FLICKR: "flickr",
    VK: "vk",
    EVERNOTE: "evernote",
    BOX: "box",
    ONEDRIVE: "onedrive",
    HUDDLE: "huddle"
};
const UploaderBlock = class {
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const UrlSource = class {
    static template = `
  <uc-activity-header>
    <button type="button" class="uc-mini-btn" set="onclick: *historyBack" l10n="@title:back;@aria-label:back">
      <uc-icon name="back"></uc-icon>
    </button>
    <div>
      <uc-icon name="url"></uc-icon>
      <span l10n="caption-from-url"></span>
    </div>
    <button
      type="button"
      class="uc-mini-btn uc-close-btn"
      set="onclick: *closeModal"
      l10n="@title:a11y-activity-header-button-close;@aria-label:a11y-activity-header-button-close"
    >
      <uc-icon name="close"></uc-icon>
    </button>
  </uc-activity-header>
  <form class="uc-content">
    <label>
      <input placeholder="https://" class="uc-url-input" type="text" ref="input" set="oninput: onInput" />
    </label>
    <button
      type="submit"
      class="uc-url-upload-btn uc-primary-btn"
      set="onclick: onUpload; @disabled: importDisabled"
      l10n="upload-url"
    ></button>
  </form>
`;
    static extSrcList = {
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static sourceTypes = {
        LOCAL: "local",
        DROP_AREA: "drop-area",
        CAMERA: "camera",
        EXTERNAL: "external",
        API: "js-api",
        URL: "url",
        DRAW: "draw",
        MOBILE_VIDEO_CAMERA: "mobile-video-camera",
        MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
        FACEBOOK: "facebook",
        DROPBOX: "dropbox",
        GDRIVE: "gdrive",
        GPHOTOS: "gphotos",
        FLICKR: "flickr",
        VK: "vk",
        EVERNOTE: "evernote",
        BOX: "box",
        ONEDRIVE: "onedrive",
        HUDDLE: "huddle"
    };
    static activities = {
        START_FROM: "start-from",
        CAMERA: "camera",
        DRAW: "draw",
        UPLOAD_LIST: "upload-list",
        URL: "url",
        CLOUD_IMG_EDIT: "cloud-image-edit",
        EXTERNAL: "external"
    };
    static reg = ()=>{};
    static styleAttrs = [];
    static is = `sym-1`;
    static bindAttributes = ()=>{};
};
const defineComponents = ()=>{};
const defineLocale = ()=>{};
const loadFileUploaderFrom = ()=>{};
const toKebabCase = ()=>{};
}),
"[project]/node_modules/@uploadcare/react-uploader/dist/useIsBrowser-wdFeUbZ-.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>x,
    "C",
    ()=>L,
    "a",
    ()=>I,
    "b",
    ()=>R,
    "g",
    ()=>k,
    "j",
    ()=>g,
    "u",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/file-uploader/index.ssr.js [app-ssr] (ecmascript)");
;
;
const b = /* @__PURE__ */ new Set([
    "children",
    "ref",
    "style",
    "className"
]), j = (e = {})=>Object == null ? void 0 : Object.keys(e).reduce((r, o)=>{
        var s, t;
        const n = e == null ? void 0 : e[o], a = `on${(t = (s = n == null ? void 0 : n.split("-")) == null ? void 0 : s.map((c)=>c.charAt(0).toUpperCase() + c.slice(1))) == null ? void 0 : t.join("")}`;
        return r[a] = n, r;
    }, {}), m = /* @__PURE__ */ new WeakMap(), A = (e)=>{
    let r = m.get(e);
    return r === void 0 && (r = /* @__PURE__ */ new Map(), m.set(e, r)), r;
}, E = ({ node: e, nameProp: r, valueProp: o, prevValueProp: s, event: t })=>{
    if (t !== void 0) {
        if (o !== s) {
            const n = A(e), a = n.has(t);
            let c = n.get(t);
            o !== void 0 ? a ? c.handleEvent = o : (c = {
                handleEvent: o
            }, n.set(t, c), e.addEventListener(t, (l)=>c.handleEvent(l.detail))) : a && (n.delete(t), e.removeEventListener(t, c));
        }
        return;
    }
    e[r] = o, o == null && r in HTMLElement.prototype && e.removeAttribute(r);
}, M = (e, r, o)=>{
    const s = {}, t = {};
    return Object.entries(e).forEach(([n, a])=>{
        b.has(n) ? s[n === "className" ? "class" : n] = a : r.has(n) || n in o.prototype ? t[n] = a : s[n] = a;
    }), {
        reactProps: s,
        customElProps: t
    };
}, g = ({ react: e, // https://react.dev/warnings/invalid-hook-call-warning
tag: r, elClass: o, schemaEvents: s })=>{
    const t = j(s), n = new Set(Object.keys(t ?? {})), a = e.forwardRef((c, l)=>{
        const i = e.useRef(/* @__PURE__ */ new Map()), p = e.useRef(null), { reactProps: h, customElProps: v } = M(c, n, o);
        return e.useLayoutEffect(()=>{
            if (p.current === null) return;
            const d = /* @__PURE__ */ new Map();
            for(const u in v)E({
                node: p.current,
                nameProp: u,
                valueProp: v[u],
                prevValueProp: i.current.get(u),
                event: t[u]
            }), i.current.delete(u), d.set(u, c[u]);
            for (const [u, C] of i.current)E({
                node: p.current,
                nameProp: u,
                valueProp: void 0,
                prevValueProp: C,
                event: t[u]
            });
            i.current = d;
        }), e.createElement(r ?? o.__tag, {
            ...h,
            ref: e.useCallback((d)=>{
                p.current = d, typeof l == "function" ? l(d) : l !== null && (l.current = d);
            }, [
                l
            ])
        });
    });
    return a.displayName = o.name, a;
}, x = g({
    react: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    tag: "uc-config",
    elClass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Config"]
}), R = g({
    react: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    tag: "uc-upload-ctx-provider",
    elClass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UploadCtxProvider"],
    schemaEvents: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UploadCtxProvider"].EventType
}), k = (e)=>{
    const r = {}, o = {}, s = {};
    for (const [t, n] of Object.entries(e)){
        if (t.startsWith("on")) {
            r[t] = n;
            continue;
        }
        if (t === "headless") {
            s[t] = n;
            continue;
        }
        o[t] = n;
    }
    return {
        eventHandlers: r,
        uploader: s,
        config: o
    };
}, O = "1.10.1", U = "React-Uploader", I = ()=>`${U}/${O}`, L = ({ children: e })=>e, S = ()=>{
    const [e, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        "undefined" < "u" && r(!0);
    }, []), e;
};
;
}),
"[project]/node_modules/@uploadcare/react-uploader/dist/FileUploaderRegular-DOI7Lze6.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileUploaderRegular",
    ()=>F
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/file-uploader/index.ssr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/react-uploader/dist/useIsBrowser-wdFeUbZ-.js [app-ssr] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.defineComponents(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
const I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])({
    react: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    tag: "uc-file-uploader-regular",
    elClass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.FileUploaderRegular
}), F = ({ ctxName: a, className: s, classNameUploader: l, apiRef: c, fallback: i, ...n })=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>a ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.UID.generate(), [
        a
    ]), { eventHandlers: d, config: g, uploader: m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(n), [
        n
    ]), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"], {
        condition: p,
        fallback: i
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: s
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"], {
        userAgentIntegration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(),
        "ctx-name": t,
        ...g
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"], {
        ref: c,
        "ctx-name": t,
        ...d
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(I, {
        class: l,
        "ctx-name": t,
        ...m
    })));
};
;
}),
"[project]/node_modules/@uploadcare/react-uploader/dist/FileUploaderMinimal-Br6g5xIZ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileUploaderMinimal",
    ()=>v
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/file-uploader/index.ssr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/react-uploader/dist/useIsBrowser-wdFeUbZ-.js [app-ssr] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.defineComponents(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
const M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])({
    react: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    tag: "uc-file-uploader-minimal",
    elClass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.FileUploaderMinimal
}), v = ({ ctxName: n, className: s, classNameUploader: i, apiRef: l, fallback: m, ...r })=>{
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>n ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.UID.generate(), [
        n
    ]), { eventHandlers: c, config: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(r), [
        r
    ]), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"], {
        condition: p,
        fallback: m
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: s
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"], {
        userAgentIntegration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(),
        "ctx-name": a,
        ...d
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"], {
        ref: l,
        "ctx-name": a,
        ...c
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(M, {
        class: i,
        "ctx-name": a
    })));
};
;
}),
"[project]/node_modules/@uploadcare/react-uploader/dist/FileUploaderInline-vnUbJRWK.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileUploaderInline",
    ()=>F
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/file-uploader/index.ssr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/react-uploader/dist/useIsBrowser-wdFeUbZ-.js [app-ssr] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.defineComponents(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
const I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])({
    react: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    tag: "uc-file-uploader-inline",
    elClass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.FileUploaderMinimal
}), F = ({ ctxName: r, className: s, classNameUploader: i, apiRef: l, fallback: c, ...a })=>{
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>r ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.UID.generate(), [
        r
    ]), { eventHandlers: m, config: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(a), [
        a
    ]), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"], {
        condition: p,
        fallback: c
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: s
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"], {
        userAgentIntegration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(),
        "ctx-name": n,
        ...d
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$useIsBrowser$2d$wdFeUbZ$2d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"], {
        ref: l,
        "ctx-name": n,
        ...m
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(I, {
        class: i,
        "ctx-name": n
    })));
};
;
}),
"[project]/node_modules/@uploadcare/react-uploader/dist/react-uploader.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$FileUploaderRegular$2d$DOI7Lze6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/react-uploader/dist/FileUploaderRegular-DOI7Lze6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$FileUploaderMinimal$2d$Br6g5xIZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/react-uploader/dist/FileUploaderMinimal-Br6g5xIZ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$react$2d$uploader$2f$dist$2f$FileUploaderInline$2d$vnUbJRWK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/react-uploader/dist/FileUploaderInline-vnUbJRWK.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadcare$2f$file$2d$uploader$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadcare/file-uploader/index.ssr.js [app-ssr] (ecmascript)");
;
;
;
;
;
}),
];

//# sourceMappingURL=_5c369b9a._.js.map